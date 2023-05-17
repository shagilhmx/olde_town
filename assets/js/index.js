//---- form submission releted js ---//
let intl, intl1, intl2;
window.onload = function () {
  let input = document.getElementById("phoneNumber");
  intl = window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "IN",
    onlyCountries: [
      "AU",
      "BT",
      "BR",
      "CA",
      "CN",
      "DE",
      "HK",
      "IN",
      "IT",
      "JP",
      "KW",
      "MY",
      "MV",
      "NP",
      "QA",
      "SA",
      "SG",
      "LK",
      "TH",
      "AE",
    ],
  });

  let input2 = document.getElementById("phone");
  intl1 = window.intlTelInput(input2, {
    separateDialCode: true,
    initialCountry: "IN",
    onlyCountries: [
      "AU",
      "BT",
      "BR",
      "CA",
      "CN",
      "DE",
      "HK",
      "IN",
      "IT",
      "JP",
      "KW",
      "MY",
      "MV",
      "NP",
      "QA",
      "SA",
      "SG",
      "LK",
      "TH",
      "AE",
    ],
  });

  let input3 = document.getElementById("phone1");
  intl2 = window.intlTelInput(input3, {
    separateDialCode: true,
    initialCountry: "IN",
    onlyCountries: [
      "AU",
      "BT",
      "BR",
      "CA",
      "CN",
      "DE",
      "HK",
      "IN",
      "IT",
      "JP",
      "KW",
      "MY",
      "MV",
      "NP",
      "QA",
      "SA",
      "SG",
      "LK",
      "TH",
      "AE",
    ],
  });

  checkNumber(document.getElementById("phoneNumber"));
  checkNumber(document.getElementById("phone"));
  checkNumber(document.getElementById("phone1"));
  document.querySelectorAll(".otpInput").forEach((e) => {
    checkNumber(e);
  });
};

const getDeviceType = () => {
  if (/Android/i.test(navigator.userAgent)) {
    return "Android";
  } else if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    return "Ios";
  } else if (/Win/i.test(navigator.userAgent)) {
    return "Windows";
  } else if (/Mac/i.test(navigator.userAgent)) {
    return "Osx";
  }
};

function checkNumber(item) {
  item.addEventListener("input", () => {
    const inputValue = item.value;
    const numericValue = inputValue.replace(/[^0-9]/g, ""); // remove all non-numeric characters
    item.value = numericValue;
  });
}

function readMore() {
  document.getElementById("displayMore").style.display = "block";
  document.getElementById("read").style.display = "none";
  document.getElementById("readLess2").style.display = "block";
}

function readMoretwo() {
  document.getElementById("displayMoreTwo").style.display = "inline";
  document.getElementById("readTwo").style.display = "none";
  document.getElementById("readLess1").style.display = "inline";
}

function readLess() {
  document.getElementById("displayMoreTwo").style.display = "none";
  document.getElementById("readTwo").style.display = "block";
  document.getElementById("readLess1").style.display = "none";
}

function readLess2() {
  document.getElementById("displayMore").style.display = "none";
  document.getElementById("read").style.display = "block";
  document.getElementById("readLess2").style.display = "none";
}

function readMore3() {
  document.getElementById("displayMoreThree").style.display = "inline";
  document.getElementById("displayLessThree").style.display = "none";
  document.getElementById("readLessButton").style.display = "inline";
}

function readLess3() {
  document.getElementById("displayMoreThree").style.display = "none";
  document.getElementById("displayLessThree").style.display = "block";
  document.getElementById("readLessButton").style.display = "none";
}

function checkInputs(inputs, submitButton, checkboxInput) {
  const anyEmpty =
    inputs.some((input) => input.value.trim() === "") || !checkboxInput.checked;
  submitButton.disabled = anyEmpty;
}
function checkInputs1(inputs, submitButton) {
  const anyEmpty = inputs.some((input) => input.value.trim() === "");
  submitButton.disabled = anyEmpty;
}

window.addEventListener(
  "load",
  (event) => {
    let checkboxs = document.querySelectorAll("input[type='checkbox']");

    let form = document.querySelectorAll(
      ".enquirySubMain input:not(input[type='checkbox'])"
    );
    checkInputs(
      [...form].splice(0, 3),
      document.getElementById("enquirBbutton1"),
      checkboxs[0]
    );
    checkInputs(
      [...form].splice(3),
      document.getElementById("enquirBbutton2"),
      checkboxs[2]
    );

    let form1 = document.querySelectorAll(".enquirySubSubMain1 input");

    checkInputs(
      [...form1],
      document.getElementById("enquirBbutton3"),
      checkboxs[1]
    );

    let otpForm = document.querySelectorAll(".inutContainer input");

    checkInputs1(
      [...otpForm].splice(0, 4),
      document.getElementById("otpBbutton1")
    );
    checkInputs1(
      [...otpForm].splice(4, 4),
      document.getElementById("otpBbutton3")
    );
    checkInputs1(
      [...otpForm].splice(8),
      document.getElementById("otpBbutton2")
    );
  },
  false
);

window.addEventListener(
  "input",
  (event) => {
    let checkboxs = document.querySelectorAll("input[type='checkbox']");

    let form = document.querySelectorAll(
      ".enquirySubMain input:not(input[type='checkbox'])"
    );
    checkInputs(
      [...form].splice(0, 3),
      document.getElementById("enquirBbutton1"),
      checkboxs[0]
    );
    checkInputs(
      [...form].splice(3),
      document.getElementById("enquirBbutton2"),
      checkboxs[2]
    );

    let form1 = document.querySelectorAll(".enquirySubSubMain1 input");

    checkInputs(
      [...form1],
      document.getElementById("enquirBbutton3"),
      checkboxs[1]
    );

    let otpForm = document.querySelectorAll(".inutContainer input");

    checkInputs1(
      [...otpForm].splice(0, 4),
      document.getElementById("otpBbutton1")
    );
    checkInputs1(
      [...otpForm].splice(4, 4),
      document.getElementById("otpBbutton3")
    );
    checkInputs1(
      [...otpForm].splice(8),
      document.getElementById("otpBbutton2")
    );
  },
  false
);

//---- add call button slide effect---//
window.addEventListener("load", (event) => {
  setTimeout(() => {
    document.getElementById("callButton").style.display = "flex";
  }, 100);
});

// --- observer implementation---- //
let target = document.querySelector(".enquiry1");
let topTarget = document.querySelector(".project-banner");
const callIcon = document.querySelector(".buttonDiv .callIcon");
const btnDiv = document.querySelector(".buttonDiv");
const body = document.querySelector("body");

const hide = () => {
  if (window.innerWidth <= 768) return;
  btnDiv.setAttribute(
    "style",
    `border-radius: 100%;padding: 0; transform: translateX(calc(100% - ${
      callIcon.getBoundingClientRect().width + 20
    }px)); background-color: transparent;`
  );
};

const show = () => {
  if (window.innerWidth <= 768) return;
  btnDiv.setAttribute("style", ``);
};

const myobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.target === target) {
        hide();
        btnDiv.addEventListener("mouseenter", show);
        btnDiv.addEventListener("mouseleave", hide);
      }
      if (entry.target === topTarget) {
        show();
        btnDiv.removeEventListener("mouseenter", show);
        btnDiv.removeEventListener("mouseleave", hide);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

myobserver.observe(topTarget);
myobserver.observe(target);

//--- implement modal for form submission ---//

window.addEventListener("load", (event) => {
  setTimeout(() => {
    document.getElementById("modal").style.display = "block";
    let blur = document.getElementById("page");
    let blur1 = document.getElementById("callButton");
    blur.classList.add("modalBlur");
    blur1.classList.add("modalBlur");
  }, 3000);
});

let downloadPdf = false;

function openModal() {
  document.getElementById("modal").style.display = "block";
  let blur = document.getElementById("page");
  let blur1 = document.getElementById("callButton");
  blur.classList.add("modalBlur");
  blur1.classList.add("modalBlur");
  downloadPdf = true;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  let blur = document.getElementById("page");
  let blur1 = document.getElementById("callButton");
  blur.classList.remove("modalBlur");
  blur1.classList.remove("modalBlur");
}

//---- form submission releted js ---//

let responseData;
function openApi(event, on) {
  event.stopPropagation();
  let in_ = document.getElementById(
    on == 1 ? "enquirBbutton1" : on == 2 ? "enquirBbutton2" : "enquirBbutton3"
  );
  in_.style.pointerEvents = "none";
  in_.innerHTML +=
    "<lottie-player class='loading' id='loading' src='assets/images/loading.json' background='transparent' speed='1' autoplay loop style='width: 50px; height: 50px'></lottie-player>";
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    (document.getElementById("Email")?.value?.match(emailRegex) ||
      document.getElementById("email")?.value?.match(emailRegex) ||
      document.getElementById("email1")?.value?.match(emailRegex)) &&
    (document.getElementById("Name")?.value ||
      document.getElementById("name")?.value ||
      document.getElementById("name1")?.value) &&
    (document.getElementById("phoneNumber")?.value ||
      document.getElementById("phone")?.value ||
      document.getElementById("phone1")?.value)
  ) {
    let url = window.location.href;
    let searchParams = new URLSearchParams(new URL(url).search);

    utm_source = searchParams.get("utm_source");
    utm_campaign = searchParams.get("utm_campaign");
    utm_medium = searchParams.get("utm_medium");
    utm_content = searchParams.get("utm_content");
    utm_terms = searchParams.get("utm_terms");
    const isOtp = new URLSearchParams(new URL(url).search).get("isOTP");
    const check =
      utm_campaign || utm_source || utm_content || utm_medium || utm_terms;
    let body = {
      phone:
        document.getElementById("phoneNumber")?.value ||
        document.getElementById("phone")?.value ||
        document.getElementById("phone1")?.value,
      name:
        document.getElementById("Name")?.value ||
        document.getElementById("name")?.value ||
        document.getElementById("name1")?.value,
      projectId: 25, // for dev 103 and for stage 24 and 25 for prod
      ...(utm_campaign != null && { campaignCode: utm_campaign }),
      requireOtp: isOtp != undefined ? isOtp : false,
      email:
        document.getElementById("Email")?.value ||
        document.getElementById("email")?.value ||
        document.getElementById("email1")?.value,
      ...(check && {
        metadata: {
          utm_campaign: utm_campaign,
          utm_content: utm_content,
          utm_medium: utm_medium,
          utm_source: utm_source,
          utm_terms: utm_terms,
        },
      }),
    };
    axios
      .post("https://api-dcrm.fincity.com/open/opportunity", body)
      .then((res) => {
        gtag_report_conversion();
        if (downloadPdf === true) {
          document.getElementById("pdfDownload").click();
          downloadPdf = false;
        }
        if (isOtp) {
          if (on == 1) {
            document.getElementById("modalHeader").style.display = "none";
            document.getElementById("enquirySubMain").style.display = "none";
            document.getElementById("otpVerification").style.display = "flex";
            document.querySelector("#numberText").innerHTML =
              document.querySelector("#numberText").innerText +
              `<strong> +${intl.getSelectedCountryData()?.dialCode}-${
                document.getElementById("phoneNumber")?.value
              }</strong>`;
            responseData = res;
          } else if (on == 2) {
            document
              .querySelector(".enquiry .section5Header")
              .setAttribute("style", "display: none");
            document.getElementById("enquiryMain").style.display = "none";
            document.getElementById("otpVerification1").style.display = "flex";
            document.querySelector("#numberText1").innerHTML =
              document.querySelector("#numberText1").innerText +
              `<strong> +${intl1.getSelectedCountryData()?.dialCode}-${
                document.getElementById("phone")?.value
              }</strong>`;
            responseData = res;
          } else if (on == 3) {
            document
              .querySelector(".enquiry1 .sectionHeader")
              .setAttribute("style", "display: none");
            document.getElementById("enquiryMain1").style.display = "none";
            document.getElementById("otpVerification2").style.display = "flex";
            document.querySelector("#numberText2").innerHTML =
              document.querySelector("#numberText2").innerText +
              `<strong> +${intl1.getSelectedCountryData()?.dialCode}-${
                document.getElementById("phone1")?.value
              }</strong>`;
            responseData = res;
          }
        } else {
          setTimeout(() => {
            window.location.href = "thankyou.html";
          }, 1000);
        }
      })
      .catch((err) => {
        let in_ = document.getElementById(
          on == 1
            ? "enquirBbutton1"
            : on == 2
            ? "enquirBbutton2"
            : "enquirBbutton3"
        );
        in_.style.pointerEvents = "all";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = err?.message;
        document.getElementById("error").style.fontSize = "12px";
        document.getElementById("error").style.color = "red";
      });
  }
}

function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}

function moveFocusBack(e) {
  var prevInput = e.target.previousElementSibling;
  if (e.key === "Backspace" && e.target.value === "" && prevInput != null) {
    prevInput.focus();
  }
}

const optionLocation = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0,
};

function detectLocation(e, check) {
  document
    .querySelector(
      check == 1
        ? "#locationButton #detect"
        : check == 2
        ? "#locationButton1 #detect1"
        : "#locationButton2 #detect2"
    )
    .remove();

  document.querySelector(
    check == 1 ? "#loading" : check == 2 ? "#loading1" : "#loading2"
  ).style.display = "block";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        delete responseData?.data?.otp;
        let body = {
          token: responseData?.data?.token,
          location: {
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude,
          },
        };

        axios
          .post(`https://api-dcrm.fincity.com/open/opportunity/verify`, body)
          .then((res) => {
            document.getElementById(
              check == 1
                ? "detectText"
                : check == 2
                ? "detectText1"
                : "detectText2"
            ).innerText = "Location Detected";

            document.querySelector(
              check == 1
                ? "#locationButton #loading"
                : check == 2
                ? "#locationButton1 #loading1"
                : "#locationButton2 #loading2"
            ).style.display = "none";

            document.getElementById(
              check == 1
                ? "locationButton"
                : (check = 2 ? "locationButton1" : "locationButton2")
            ).style.pointerEvents = "none";

            document.querySelector(
              check == 1
                ? "#locationButton #timer"
                : check == 2
                ? "#locationButton1 #timer1"
                : "#locationButton2 #timer2"
            ).style.display = "block";
          })
          .catch((err) => {});
      },
      (error) => {
        // There was an error retrieving the location
        document.getElementById(
          check == 1 ? "detectText" : check == 2 ? "detectText1" : "detectText2"
        ).innerText = "Failed to fetch Location!";
        document.getElementById(
          check == 1 ? "loading" : check == 2 ? "loading1" : "loading2"
        ).style.display = "none";
      },
      optionLocation
    );
  } else {
    document.getElementById(
      check == 1 ? "loading" : check == 2 ? "loading1" : "loading2"
    ).style.display = "none";
    document.getElementById(
      check == 1 ? "detectText" : check == 2 ? "detectText1" : "detectText2"
    ).innerText = "Failed to fetch Location!";
  }
}

function backMain(e, check) {
  e.stopPropagation();
  document.getElementById("modalHeader").style.display = "block";
  document.getElementById(
    check == 1
      ? "otpVerification"
      : check == 2
      ? "otpVerification1"
      : "otpVerification2"
  ).style.display = "none";
  document.getElementById(
    check == 1 ? "enquirySubMain" : check == 2 ? "enquiryMain" : "enquiryMain1"
  ).style.display = "flex";
  document.querySelector(
    check == 1 ? "#numberText" : check == 2 ? "#numberText1" : "#numberText2"
  ).innerHTML = "Please Enter the Verification Code sent to";
  document.getElementById(
    check == 1
      ? "enquirBbutton1"
      : check == 2
      ? "enquirBbutton2"
      : "enquirBbutton3"
  ).style.pointerEvents = "all";
}

function resendOtp(e, check) {
  e.stopPropagation();
  axios
    .post(
      `https://api-dcrm.fincity.com/open/opportunity/send-otp?token=${responseData?.data?.token}`
    )
    .then((res) => {
      document.querySelector(check ? "#resendOtp" : "#resendOtp1").innerText =
        "OTP SENT!";
      responseData = res;
    })
    .catch((err) => {});
}

function verfiyOtp(e, check) {
  e.stopPropagation();
  let otp =
    document.querySelector(
      check == 1 ? "#_1st" : check == 2 ? "#_1st_" : "#_1st_3"
    )?.value +
    document.querySelector(
      check == 1 ? "#_2nd" : check == 2 ? "#_2nd_" : "#_2nd_3"
    )?.value +
    document.querySelector(
      check == 1 ? "#_3rd" : check == 2 ? "#_3rd_" : "#_3rd_3"
    )?.value +
    document.querySelector(
      check == 1 ? "#_4th" : check == 2 ? "#_4th_" : "#_4th_3"
    )?.value;
  let body = {
    token: responseData?.data?.token,
    otp: otp,
  };
  axios
    .post(`https://api-dcrm.fincity.com/open/opportunity/verify`, body)
    .then((res) => {
      document.getElementById(
        check == 1
          ? "otpVerification"
          : check == 2
          ? "otpVerification1"
          : "otpVerification2"
      ).style.display = "none";
      document.getElementById(
        check == 1 ? "location" : check == 2 ? "location1" : "location2"
      ).style.display = "flex";
      let count = 10;

      let countdown = setInterval(() => {
        count--;

        if (count === 0) {
          let deviceType = getDeviceType();
          clearInterval(countdown);
          window.location.href = `https://dcrm.fincity.com/?&user=consumer&device-type=${deviceType}&token=${res?.data?.consumerToken}&isLandingPage=true`;
        }
      }, 1000);
    })
    .catch((err) => {});
}
