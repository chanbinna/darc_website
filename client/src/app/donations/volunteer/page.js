"use client";

import React, { useState } from "react";
import Navigation from "../../../../components/navigation";
import styles from "./volunteer.module.css";
import Link from "next/link";
import { GoX } from "react-icons/go";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { RadioButton } from "primereact/radiobutton";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";

export default function Program1() {
  const [showPopup, setShowPopup] = useState(false);

  const [name, setName] = useState("");
  const [vms, setVms] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number

  const [email, setEmail] = useState("");
  const [domain, setDomain] = useState(""); // State for domain input
  const [isDomainInputDisabled, setIsDomainInputDisabled] = useState(false); // State for disabling/enabling the domain input
  const [startdate, setstartDate] = useState();
  const [enddate, setendDate] = useState();
  const [starttime, setstartTime] = useState();
  const [endtime, setendTime] = useState();
  const [volunteerContent, setVolunteerContent] = useState([]);
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [firstconsent, setfirstConsent] = useState("");
  const [secondconsent, setsecondConsent] = useState("");

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Handle domain selection from dropdown
  const handleDomainChange = (event) => {
    const value = event.target.value;

    if (value !== "type") {
      setDomain(value);
      setIsDomainInputDisabled(true); // Disable input if a domain is selected
    } else {
      setDomain("");
      setIsDomainInputDisabled(false); // Enable input for manual entry
    }
  };

  const handleVolunteerContentChange = (e) => {
    let updatedContent = [...volunteerContent];
    if (e.checked) {
      updatedContent.push(e.value);
    } else {
      updatedContent.splice(updatedContent.indexOf(e.value), 1);
    }
    setVolunteerContent(updatedContent);
  };

  // Handle phone number formatting with hyphen
  const handlePhoneInput = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    let formattedPhone = input;

    if (input.length < 4) {
      formattedPhone = input;
    } else if (input.length < 7) {
      formattedPhone = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length < 11) {
      formattedPhone = `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6)}`;
    } else {
      formattedPhone = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(7, 11)}`;
    }

    setPhoneNumber(formattedPhone);
  };

  const handleEmailInput = (e) => {
    const input = e.target.value;
    const validEmailRegex = /^[a-zA-Z0-9@._-]*$/; // Regex for valid email characters (no Korean, only email-valid symbols)

    if (validEmailRegex.test(input)) {
      setEmail(input); // Only update state if the input is valid
    }
  };

  const handleDomainInput = (e) => {
    const input = e.target.value;
    const validDomainRegex = /^[a-zA-Z0-9.-]*$/; // Regex for valid domain characters (no Korean, only valid domain symbols)

    if (validDomainRegex.test(input)) {
      setDomain(input); // Only update state if the input is valid
    }
  };

  addLocale("ko", {
    firstDayOfWeek: 0, // Start the week on Monday
    showMonthAfterYear: true, // In Korean, the month comes after the year
    dayNames: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ], // Full names of days
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"], // Shortened names of days
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"], // Minimal day names
    monthNames: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ], // Full month names
    monthNamesShort: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ], // Shortened month names
    today: "오늘", // "Today" in Korean
    clear: "지우기", // "Clear" in Korean
  });

  const handleFormSubmit = async () => {
    // Check if all required fields are filled out
    if (
      !name ||
      !phoneNumber ||
      !domain ||
      !address ||
      !startdate ||
      !enddate ||
      !starttime ||
      !endtime ||
      volunteerContent.length === 0
    ) {
      setErrorMessage("* 필수입력사항을 모두 입력해주세요.");
      return;
    }

    // Check if both consents are agreed
    if (firstconsent !== "동의" || secondconsent !== "동의") {
      setErrorMessage("* 개인정보 보호 동의를 해주세요.");
      return;
    }

    // If both conditions are satisfied, reset the error message
    setErrorMessage("");

    // Prepare the email
    const fullEmail = `${email}@${domain}`;

    // Create the form data JSON
    const formData = {
      name,
      vms, // Default to an empty string if vms is undefined or empty
      phoneNumber,
      address,
      email: fullEmail,
      volunteerContent,
      startdate: startdate ? startdate.toLocaleDateString() : "",
      enddate: enddate ? enddate.toLocaleDateString() : "",
      starttime: starttime
        ? starttime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "",
      endtime: endtime
        ? endtime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : "",
      detailedContent: text || "", // Default to an empty string if detailedContent (text) is undefined or empty
      consent: {
        firstconsent,
        secondconsent,
      },
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the formData JSON
      });

      const result = await response.json();

      if (response.ok) {
        alert("자원봉사 신청서가 제출되었습니다!");
        setTimeout(() => {
          window.location.reload(); // Refresh the page
        }, 3000);
      } else {
        setErrorMessage("Error sending email: " + result.error);
      }
    } catch (error) {
      setErrorMessage("Error sending email: " + error.message);
    }
  };

  return (
    <div>
      <ScrollToTop />
      <Navigation />

      <main className={`${styles.main} ${showPopup ? styles.blurred : ""}`}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>자원봉사</h1>
            </div>
            <div className={styles.link}>
              <Link href='/donations/volunteer'>후원</Link>
              <p>&gt;</p>
              <Link href='/donations/volunteer'>
                <h4>자원봉사</h4>
              </Link>
            </div>
          </div>
          <div className={styles.contentBox}>
            <h3>
              지금, 다르크와 함께 <br />
              마약으로 고통받고 있는 <br />
              중독자들에게 큰 힘이 되어주세요.
            </h3>
            <div className={styles.picBox}>
              <img src='/donation.png' alt='' />
            </div>
            <div className={styles.picBox2}>
              <img src='/donation2.png' alt='' />
            </div>

            <div className={styles.margin}></div>
            <div className={styles.application}>
              <button onClick={handlePopup}>Application Form</button>
            </div>
          </div>
        </div>
        <Footer />
      </main>

      {/* The popup overlay and popup content */}
      {showPopup && (
        <>
          <div className={styles.popupOverlay} onClick={closePopup}></div>
          <div className={styles.popupContent}>
            <div className={styles.popHeader}>
              <img src='/donation1.png' alt='' />
              <h1>자원봉사 신청서</h1>
            </div>
            <button className={styles.closebutton} onClick={closePopup}>
              <GoX />
            </button>
            <label className={styles.requiredText} htmlFor=''>
              별표표시(*) 가 있는 항목은 필수 입력사항입니다.
            </label>
            <div className={styles.forms1}>
              <div className={styles.formsDivide}>
                <label>
                  <span className={styles.required}>*</span>
                  <span className={styles.boldText}> 성명 </span>
                  <span> (기업, 단체 담당자명)</span>
                </label>
                <input
                  type='text'
                  placeholder='성함을 입력해 주세요.'
                  value={name} // Bind the input value to the state
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.formsDivide}>
                <label>
                  <span className={styles.boldText}> VMS ID </span>
                  <span>(ID가 있으시면 적어주세요)</span>
                </label>
                <input
                  type='text'
                  placeholder='ID를 입력해주세요.'
                  value={vms} // Bind the input value to the state
                  onChange={(e) => setVms(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.formFull}>
              <label>
                <span className={styles.required}>*</span>
                <span className={styles.boldText}> 휴대폰번호 </span>
              </label>
              <input
                type='text'
                placeholder='휴대폰 번호를 입력해주세요.'
                value={phoneNumber}
                onChange={handlePhoneInput}
                maxLength='13'
              />
            </div>
            <div className={styles.formFull}>
              <label>
                <span className={styles.required}>*</span>
                <span className={styles.boldText}> 주소 </span>
              </label>
              <input
                type='text'
                placeholder='주소를 입력해주세요.'
                value={address} // Bind the input value to the state
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className={styles.formEmail}>
              <label>
                <span className={styles.required}>*</span>
                <span className={styles.boldText}> 이메일 </span>
              </label>
              <div className={styles.emailBox}>
                <input
                  className='box'
                  type='text'
                  placeholder='이메일을 입력해주세요.'
                  value={email} // Bind the input value to the state
                  onChange={handleEmailInput} // Apply the email handler
                />
                <label> @ </label>
                <input
                  className='box'
                  id='domain-txt'
                  type='text'
                  value={domain}
                  disabled={isDomainInputDisabled}
                  onChange={handleDomainInput} // Apply the domain handler
                  placeholder='email.com'
                />
                <select
                  className='box'
                  id='domain-list'
                  onChange={handleDomainChange}
                >
                  <option value='type'>직접 입력</option>
                  <option value='naver.com'>naver.com</option>
                  <option value='gmail.com'>gmail.com</option>
                  <option value='hanmail.net'>hanmail.net</option>
                  <option value='nate.com'>nate.com</option>
                  <option value='kakao.com'>kakao.com</option>
                </select>
              </div>
            </div>
            <div className={styles.formEmail}>
              <label>
                <span className={styles.required}>*</span>
                <span className={styles.boldText}> 봉사기간 </span>
              </label>
              <div
                className={`card flex justify-content-center ${styles.calendarContainer}`}
              >
                <Calendar
                  value={startdate}
                  onChange={(e) => setstartDate(e.value)}
                  dateFormat='yy년 mm월 dd일'
                  locale='ko'
                  className={styles.calendarInput}
                  placeholder='시작 날짜를 선택해주세요.'
                />
                <label className={styles.atSign}>~</label>{" "}
                {/* Use a label or div for separation */}
                <Calendar
                  value={enddate}
                  onChange={(e) => setendDate(e.value)}
                  dateFormat='yy년 mm월 dd일'
                  locale='ko'
                  className={styles.calendarInput}
                  placeholder='종료 날짜를 선택해주세요.'
                />
              </div>
            </div>
            <div className={styles.formEmail}>
              <label>
                <span className={styles.required}>*</span>
                <span className={styles.boldText}> 활동가능시간 </span>
              </label>
              <div
                className={`card flex justify-content-center ${styles.calendarContainer}`}
              >
                <Calendar
                  value={starttime}
                  onChange={(e) => setstartTime(e.value)}
                  timeOnly
                  className={styles.calendarInput}
                  placeholder='시작 시간을 선택해주세요.'
                  hourFormat='12'
                  stepMinute={10}
                />
                <label className={styles.atSign}>~</label>{" "}
                {/* Use a label or div for separation */}
                <Calendar
                  value={endtime}
                  onChange={(e) => setendTime(e.value)}
                  timeOnly
                  className={styles.calendarInput}
                  placeholder='종료 시간을 선택해주세요.'
                  hourFormat='12'
                  stepMinute={10}
                />
              </div>
            </div>
            <div className={styles.formFull}>
              <label>
                <span className={styles.required}>*</span>
                <span className={styles.boldText}> 희망 봉사 내용 </span>
              </label>
              <div className={styles.clickbox}>
                <div
                  className={`card flex flex-wrap gap-3 ${styles.checkboxContainer}`}
                >
                  <div className={styles.boxbox}>
                    <Checkbox
                      inputId='volunteerOption1'
                      value='기관청소'
                      onChange={handleVolunteerContentChange}
                      checked={volunteerContent.includes("기관청소")}
                    />
                    <label htmlFor='volunteerOption1' className='ml-2'>
                      기관청소
                    </label>
                  </div>
                  <div className={styles.boxbox}>
                    <Checkbox
                      inputId='volunteerOption2'
                      value='프로그램 봉사'
                      onChange={handleVolunteerContentChange}
                      checked={volunteerContent.includes("프로그램 봉사")}
                    />
                    <label htmlFor='volunteerOption2' className='ml-2'>
                      프로그램 봉사
                    </label>
                  </div>
                  <div className={styles.boxbox}>
                    <Checkbox
                      inputId='volunteerOption3'
                      value='학습 봉사'
                      onChange={handleVolunteerContentChange}
                      checked={volunteerContent.includes("학습 봉사")}
                    />
                    <label htmlFor='volunteerOption3' className='ml-2'>
                      학습 봉사
                    </label>
                  </div>
                  <div className={styles.boxbox}>
                    <Checkbox
                      inputId='volunteerOption4'
                      value='기타'
                      onChange={handleVolunteerContentChange}
                      checked={volunteerContent.includes("기타")}
                    />
                    <label htmlFor='volunteerOption4' className='ml-2'>
                      기타
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.formFull2}>
              <label>
                <span className={styles.boldText}> 세부 내용 </span>
              </label>
              <textarea
                rows='5'
                className={styles.textarea}
                value={text} // Bind the textarea value to the state
                onChange={(e) => setText(e.target.value)} // Update the state inline when the user types
                placeholder='세부 내용을 입력해주세요.'
              ></textarea>
            </div>
            <div className={styles.lastbox}>
              <h3>개인정보 보호 동의서</h3>
              <div>
                <h4>개인정보의 항목 및 수정</h4>
                <p>- 필수정보: 성명, 연락처, 주소</p>
                <div className={styles.smallBox}>
                  <p>자원봉사자 구별을 위한 필요정보 수집에 동의하십니까?</p>

                  <div className={styles.selectBox}>
                    <div className='flex align-items-center'>
                      <RadioButton
                        inputId='agree'
                        name='consent'
                        value='동의'
                        onChange={(e) => setfirstConsent(e.value)}
                        checked={firstconsent === "동의"}
                      />
                      <label htmlFor='agree' className='ml-2'>
                        동의
                      </label>
                    </div>
                    <div className='flex align-items-center'>
                      <RadioButton
                        inputId='disagree'
                        name='consent'
                        value='비동의'
                        onChange={(e) => setfirstConsent(e.value)}
                        checked={firstconsent === "비동의"}
                      />
                      <label htmlFor='disagree' className='ml-2'>
                        비동의
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4>
                  다르크협회는 수집한 정보를 다음의 목적을 위해 활용합니다
                </h4>
                <p>
                  - 관리, 정보 제공 등 자원봉사자관리 용도, 활용/홍보, 마케팅,
                  자료요청 등 자원봉사관리 목적 외 이용 시
                </p>
                <div className={styles.smallBox}>
                  <p>
                    원활한 봉사활동을 위한 홍보, 마케팅, 자료요청 등의 정보
                    제공에 동의하십니까?
                  </p>
                  <div className={styles.selectBox}>
                    <div className='flex align-items-center'>
                      <RadioButton
                        inputId='agree'
                        name='consent'
                        value='동의'
                        onChange={(e) => setsecondConsent(e.value)}
                        checked={secondconsent === "동의"}
                      />
                      <label htmlFor='agree' className='ml-2'>
                        동의
                      </label>
                    </div>
                    <div className='flex align-items-center'>
                      <RadioButton
                        inputId='disagree'
                        name='consent'
                        value='비동의'
                        onChange={(e) => setsecondConsent(e.value)}
                        checked={secondconsent === "비동의"}
                      />
                      <label htmlFor='disagree' className='ml-2'>
                        비동의
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <span className={styles.lastText}>
                <p>
                  수집한 정보 파일의 보유기간은 수집 목적을 달성한 시점까지
                  이며, 파기를 요청하실 경우 절차에 따라 즉시(영업일 기준 5일
                  이내) 파기되어 집니다. 본인은 위의 내용을 충분히 숙지하였으며,
                  보다 나은 서비스 제공을 위해 개인정보를 수집, 활용, 제공하는
                  것에 동의합니다.
                </p>
              </span>
            </div>
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
            <div className={styles.boxboxbox}>
              {/* Display error message */}

              <button className={styles.submit} onClick={handleFormSubmit}>
                신청
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
