
let userLang = (navigator.language || (navigator).userLanguage || 'en').split('-')[0];
console.log("Browser Language Code: ", userLang);
window.klaroConfig = {
  "consentManagerId": "6a4ca5e4bded824de27118dc",
  "uuid": "99f8b84c-5eff-4231-ae12-536168f043dd",
  "domain": "https://starhealth.pre-dataprivacy.com/cmapi",
  "version": 1,
  "elementID": "SEQRITE",
  lang: userLang,
  "storageMethod": "cookie",
  "storageName": "testcookieconsent_rutuja-nalage_workers_dev_",
  "cookieExpiresAfterDays": 365,
  "default": true,
  "mustConsent": false,
  "acceptAll": true,
  "hideDeclineAll": false,
  "hideLearnMore": false,
  "disablePoweredBy": false,
  "translations": {
    "english": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "<p>Customize Consent Preferences</p>",
        "description": "<p>We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website. However, we acknowledge your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site.</p>",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "en": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "zz": {
      "acceptAll": "Accept all",
      "accept": "Accept",
      "decline": "Reject All",
      "acceptSelected": "Accept Selected",
      "ok": "Accept All",
      "consentNotice": {
        "description": "<p><strong>We respect your privacy</strong></p><p>We store cookies to enable essential site functionality, as well as marketing, personalization and analytics. By clicking “Accept All”, you consent to our use of cookies. You can change your settings at any time. <a href=\"https://www.google.com/\" title=\"https://www.google.com/\" target=\"_blank\"><u>Cookie Policy.</u></a></p>",
        "learnMore": "Customize",
        "changeDescription": " "
      },
      "save": "Accept",
      "consentModal": {
        "title": "Customize Consent Preferences",
        "description": "We use cookies to help you navigate between pages efficiently, storing your preferences, and generally improving your experience of a website.  However, we acknowledge  your right to privacy and hence you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. Please note that blocking certain types of cookies might affect your experience of the site. ",
        "buttons": {
          "save": "Accept",
          "acceptAll": "Accept all",
          "decline": "Reject All"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Reject All",
          "title": "Reject All"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ks": {
      "acceptAll": "سٲری کر قبوٗل۔",
      "accept": "قبول کرن۔",
      "decline": "سٲری کریو رد۔",
      "acceptSelected": "منتخب کر قبول۔",
      "ok": "سٲری کر قبوٗل۔",
      "consentNotice": {
        "description": "أسۍ چھ تہنٛز راز دٲری ہنٛد احترام کران أسۍ چھ ضروری سایٹہ ہنٛز فعالیتس سۭتۍ مارکیٹنگ، پرسنلائزیشن تہٕ تجزیاتن فعال کرنہٕ خٲطرٕ کوکیز ذخیرٕ کران۔ \"تمام قبول کرو\" کلک کرتھ، تہۍ چھو سانۍ کوکیز استعمال کرنہٕ خٲطرٕ رضامند۔ تہۍ ہیٚکو کنہ تہ وقتہٕ پنٕنۍ سیٹنگہٕ تبدیل کٔرتھ۔ کوکی پالیسی۔",
        "learnMore": "کسٹمائز کر۔",
        "changeDescription": " "
      },
      "save": "قبول کرن۔",
      "consentModal": {
        "title": "رضامندی ہنز ترجیحات کر کسٹمائز",
        "description": "أسۍ چھ کوکیز استعمال کران تۄہہ پیجن درمیان کامیٲبی سان نیویگیٹ کرنس منٛز مدد کرنہٕ خٲطرٕ، تہنٛز ترجیحات محفوظ کرنہٕ خٲطرٕ، تہٕ عام طور پٲٹھۍ ویب سایٹہ ہنٛد تہنٛد تجربہٕ بہتر بناونہٕ خٲطرٕ۔ وونہ گو٘، أسۍ چھ تہنٛد راز دٲری ہنٛد حق تسلیم کران تہٕ امہ کنہ ہیٚکو تہۍ کیٚنٛہہ قٕسمٕک کوکیزن اجازت نہٕ دنک انتخاب کٔرتھ۔ زیادٕ زانٛکٲری تہٕ سٲنۍ ڈیفالٹ سیٹنگہٕ بدلاونہٕ خٲطرٕ کٔرو مختٔلف زمرٕ کین عنوانن پؠٹھ کلک۔ مہربٲنی کٔرتھ کٔرو نوٹ ز کیٚنٛہہ قٕسمٕک کوکیز بلاک کرنہٕ سۭتۍ ہیٚکہ تہنٛد سایٹہ ہنٛد تجربہٕ متٲثر گژھتھ۔",
        "buttons": {
          "save": "قبول کرن۔",
          "acceptAll": "سٲری کر قبوٗل۔",
          "decline": "سٲری کریو رد۔"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "سٲری کریو رد۔",
          "title": "سٲری کریو رد۔"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "أسۍ چھ یم کوکیز ویب سایٹہ پیٹھ کٲم کرنہٕ خٲطرٕ تہٕ صارف کہ تجربہٕ بہتر بناونہٕ خٲطرٕ استعمال کران۔ زانٛکٲری منٛز ہیٚکہ لاگ ان ڈیٹا، خطہٕ، زبان تہٕ بہتر مواد شٲمل ٲستھ۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "یم کوکیز چھ ویب سائٹ ٹریفک، صارفک رویہٕ، تہٕ مشغولیتک نمونن ہیند تجزیہٕ کرنس منٛز مدد کران۔ جمع کرنہٕ آمٕتۍ بصیرت چھ اسہ مواد بہتر بناون، استعمالس منٛز اضافہٕ کرن، تہٕ مجموعی سائٹچ کارکردگی بہتر بناونک اجازت دیوان۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "یم کوکیز چھ سٲنۍ تشہیری شراکت دارن ذریعہٕ ذاتی اشتہار دنہٕ تہٕ مارکیٹنگ مہمن ہنٛد اثر و رسوخچ پیمٲئش کرنہٕ خٲطرٕ استعمال یوان کرنہٕ۔ تم چھ صارفن ہنٛز دلچسپین تہٕ براؤزنگ رویس پیٹھ مبنی متعلقہ پروموشنز فراہم کرنس منٛز مدد کران۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "اتھ زمرس منٛز چھ کوکیز شأمل یم نہٕ گوڑنتھ طے شدٕ زمرن منٛز فٹ چھ آسان مگر ویب سائٹچ کنہہ فعالیتہٕ یا بہتری خاطرٕ چھ ضروری۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "سیکیورٹی کوکیز چھ تصدیق، دھوکہ دہی ہنٛز روک تھام، تہٕ محفوظ براؤزنگ فعال کرتھ صارفن ہنٛد ڈیٹا محفوظ تھونس منٛز مدد کران۔ تم چھ اتھ کتھۍ یقینی بناوان ز حساس معلومات، یتھ کٔنۍ لاگ ان اسناد، چھ انکرپٹڈ کنکشنن پؠٹھ بحفاظت منتقل گژھان۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "doi": {
      "acceptAll": "सभनें गी मंजूर करो",
      "accept": "मंजूर करो",
      "decline": "सभनें गी रद्द करो",
      "acceptSelected": "चुने गेदे गी मंजूर करो",
      "ok": "सभनें गी मंजूर करो",
      "consentNotice": {
        "description": "अस तुंʼदी निजता दा सम्मान करदे आं अस जरूरी साइट कार्यक्षमता दे कन्नै-कन्नै मार्केटिंग, निजीकरण ते विश्लेषिकी गी सक्षम करने आस्तै कुकीज़ स्टोर करदे आं। \"सभनें गी मंजूर करो\" पर क्लिक करियै, तुस साड़ियां कुकीज़ दे इस्तेमाल आस्तै सैह्मती दिंदे ओ। तुस कुसै बी समें अपनी सेटिंग बदली सकदे ओ। कुकी नीति।",
        "learnMore": "अनुकूलित करो",
        "changeDescription": " "
      },
      "save": "मंजूर करो",
      "consentModal": {
        "title": "सहमति वरीयताएं गी अनुकूलित करो",
        "description": "अस पेजें दे बिच्च कुशलता कन्नै नैविगेट करने च तुंʼदी मदद करने, तुंʼदी पसंदें गी स्टोर करने ते आमतौरा पर कुसै वैबसाइट दे तुंʼदे अनुभव गी सधारत करने आस्तै कुकीज़ दा इस्तेमाल करदे आं। हालां-के, अस तुंʼदे निजता दे हक्क गी मंजूर करदे आं ते इस करियै तुस किश किस्में दियें कुकीज़ गी इजाज़त नेईं देने दा विकल्प चुन सकदे ओ। मती जानकारी हासल करने ते अपनी डिफ़ॉल्ट सेटिंग्स गी बदलने आस्तै बक्ख-बक्ख वर्ग शीर्षकें पर क्लिक करो। कृपा करियै ध्यान देओ जे किश किस्में दियें कुकीज़ गी अवरुद्ध करना साइट दे तुंʼदे अनुभव गी प्रभावत करी सकदा ऐ।",
        "buttons": {
          "save": "मंजूर करो",
          "acceptAll": "सभनें गी मंजूर करो",
          "decline": "सभनें गी रद्द करो"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सभनें गी रद्द करो",
          "title": "सभनें गी रद्द करो"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "अस इʼनें कुकीज़ दा उपयोग वैबसाइट दी कार्यक्षमता गी बधाने ते उपयोगकर्ता अनुभव गी सधारत करने आस्तै करदे आं। जानकारी च लाग-इन डेटा, खेतर, भाशा ते उन्नत सामग्री शामल होई सकदी ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "एह् कुकीज वेबसाइट ट्रैफिक, उपयोगकर्ता बर्ताव ते जुड़ाव पैटर्न दा विश्लेशन करने च साडी मदद करदियां न। इकट्ठी कीती गेई अंतर्दृष्टि तुसें गी सामग्री गी अनुकूलत करने, उपयोगता बधाने ते समूचे साइट प्रदर्शन च सधार करने दी इजाज़त दिंदी ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इʼनें कुकीज़ दा उपयोग हमारे विज्ञापन भागीदारें आसेआ निजीकृत विज्ञापन देने ते मार्केटिंग अभियानें दी प्रभावशीलता गी नापने आस्तै कीता जंदा ऐ। ओह् उपयोगकर्ता दी दिलचस्पी ते ब्राउज़िंग बर्ताव दे अधार पर प्रासंगिक प्रचार प्रदान करने च मदद करदे न।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस वर्ग च कुकीज शामल न जेह्ड़े पूर्वपरिभाषित श्रेणियें च खरा नेईं उतरदे पर किश वैबसाइट कार्यक्षमताएं जां सधारें आस्तै लाजमी होई सकदे न।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज़ प्रमाणीकरण, धोखाधड़ी रोकथाम ते सुरक्खत ब्राउज़िंग गी सक्षम करियै उपयोगकर्ता डेटा दी सुरक्षा च मदद करदियां न। ओह् एह् निश्चत करदे न जे संवेदनशील जानकारी, जिʼयां के लाग-इन प्रमाण-पत्र, कूटबद्ध कनेक्शनें पर सुरक्खत रूप कन्नै प्रेषित कीती जंदी ऐ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "kn": {
      "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
      "accept": "ಸ್ವೀಕರಿಸಿ",
      "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
      "acceptSelected": "ಆಯ್ಕೆಯಾದವರನ್ನು ಸ್ವೀಕರಿಸಿ",
      "ok": "ಎಲ್ಲವನ್ನು ಸ್ವೀಕರಿಸಿ",
      "consentNotice": {
        "description": "ನಿಮ್ಮ ಗೌಪ್ಯತೆಯನ್ನು ನಾವು ಗೌರವಿಸುತ್ತೇವೆ, ಅಗತ್ಯವಾದ ಸೈಟ್ ಕಾರ್ಯವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು, ಹಾಗೆಯೇ ಮಾರ್ಕೆಟಿಂಗ್, ವೈಯಕ್ತೀಕರಣ ಮತ್ತು ವಿಶ್ಲೇಷಣೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ. \"ಎಲ್ಲರನ್ನೂ ಸ್ವೀಕರಿಸಿ\" ಕ್ಲಿಕ್ ಮಾಡುವ ಮೂಲಕ, ನೀವು ನಮ್ಮ ಕುಕೀಗಳ ಬಳಕೆಯನ್ನು ಒಪ್ಪುತ್ತೀರಿ. ನೀವು ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಬದಲಾಯಿಸಬಹುದು. ಕುಕೀ ನೀತಿ.",
        "learnMore": "ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "changeDescription": " "
      },
      "save": "ಸ್ವೀಕರಿಸಿ",
      "consentModal": {
        "title": "ಒಪ್ಪಿಗೆಯ ಆದ್ಯತೆಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ",
        "description": "ಪುಟಗಳ ನಡುವೆ ಪರಿಣಾಮಕಾರಿಯಾಗಿ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಲು, ನಿಮ್ಮ ಆದ್ಯತೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ ವೆಬ್ಸೈಟ್ನ ನಿಮ್ಮ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ನಾವು ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ಆದಾಗ್ಯೂ, ನಿಮ್ಮ ಗೌಪ್ಯತೆಯ ಹಕ್ಕನ್ನು ನಾವು ಅಂಗೀಕರಿಸುತ್ತೇವೆ ಮತ್ತು ಆದ್ದರಿಂದ ನೀವು ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ಅನುಮತಿಸದಿರಲು ಆಯ್ಕೆ ಮಾಡಬಹುದು. ಹೆಚ್ಚು ತಿಳಿಯಲು ಮತ್ತು ನಮ್ಮ ಪೂರ್ವನಿಯೋಜಿತ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಬದಲಾಯಿಸಲು ವಿವಿಧ ವರ್ಗದ ಶೀರ್ಷಿಕೆಗಳ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ. ಕೆಲವು ರೀತಿಯ ಕುಕೀಗಳನ್ನು ನಿರ್ಬಂಧಿಸುವುದರಿಂದ ಸೈಟ್ನ ನಿಮ್ಮ ಅನುಭವದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಬಹುದು ಎಂಬುದನ್ನು ದಯವಿಟ್ಟು ಗಮನಿಸಿ.",
        "buttons": {
          "save": "ಸ್ವೀಕರಿಸಿ",
          "acceptAll": "ಎಲ್ಲವನ್ನೂ ಸ್ವೀಕರಿಸಿ",
          "decline": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ",
          "title": "ಎಲ್ಲವನ್ನೂ ತಿರಸ್ಕರಿಸಿ"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "ಜಾಲತಾಣದ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಬಳಕೆದಾರರ ಅನುಭವವನ್ನು ಸುಧಾರಿಸಲು ನಾವು ಈ ಕುಕೀಗಳನ್ನು ಬಳಸುತ್ತೇವೆ. ಮಾಹಿತಿಯು ಲಾಗಿನ್ ದತ್ತಾಂಶ, ಪ್ರದೇಶ, ಭಾಷೆ ಮತ್ತು ವರ್ಧಿತ ವಿಷಯವನ್ನು ಒಳಗೊಂಡಿರಬಹುದು.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ಈ ಕುಕೀಗಳು ಜಾಲತಾಣದ ದಟ್ಟಣೆ, ಬಳಕೆದಾರರ ನಡವಳಿಕೆ ಮತ್ತು ನಿಶ್ಚಿತಾರ್ಥದ ಮಾದರಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಸಂಗ್ರಹಿಸಿದ ಒಳನೋಟಗಳು ನಮಗೆ ವಿಷಯವನ್ನು ಅತ್ಯುತ್ತಮವಾಗಿಸಲು, ಉಪಯುಕ್ತತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಒಟ್ಟಾರೆ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸುಧಾರಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ಈ ಕುಕೀಗಳನ್ನು ನಮ್ಮ ಜಾಹೀರಾತು ಪಾಲುದಾರರು ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಜಾಹೀರಾತುಗಳನ್ನು ನೀಡಲು ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ ಅಭಿಯಾನಗಳ ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಅಳೆಯಲು ಬಳಸುತ್ತಾರೆ. ಬಳಕೆದಾರರ ಆಸಕ್ತಿಗಳು ಮತ್ತು ಬ್ರೌಸಿಂಗ್ ನಡವಳಿಕೆಯ ಆಧಾರದ ಮೇಲೆ ಸಂಬಂಧಿತ ಪ್ರಚಾರಗಳನ್ನು ಒದಗಿಸಲು ಅವು ಸಹಾಯ ಮಾಡುತ್ತವೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ಈ ವರ್ಗವು ಪೂರ್ವನಿರ್ಧರಿತ ವರ್ಗಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗದ ಆದರೆ ಕೆಲವು ಜಾಲತಾಣದ ಕಾರ್ಯಗಳು ಅಥವಾ ಸುಧಾರಣೆಗಳಿಗೆ ಅಗತ್ಯವಾಗಬಹುದಾದ ಕುಕೀಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ದೃಢೀಕರಣ, ವಂಚನೆ ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಬ್ರೌಸಿಂಗ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವ ಮೂಲಕ ಬಳಕೆದಾರರ ಡೇಟಾವನ್ನು ರಕ್ಷಿಸಲು ಭದ್ರತಾ ಕುಕೀಗಳು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಲಾಗಿನ್ ರುಜುವಾತುಗಳಂತಹ ಸೂಕ್ಷ್ಮ ಮಾಹಿತಿಯನ್ನು ಎನ್ಕ್ರಿಪ್ಟ್ ಮಾಡಲಾದ ಸಂಪರ್ಕಗಳ ಮೂಲಕ ಸುರಕ್ಷಿತವಾಗಿ ರವಾನಿಸಲಾಗುತ್ತದೆ ಎಂದು ಅವರು ಖಚಿತಪಡಿಸುತ್ತಾರೆ.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "sat": {
      "acceptAll": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "accept": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "decline": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾",
      "acceptSelected": "ᱵᱟᱪᱷᱱᱟᱣ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "ok": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "consentNotice": {
        "description": "ᱟᱢ ᱟᱢᱟᱜ ᱜᱚᱭᱱᱟᱥᱤ ᱨᱮᱭᱟᱜ ᱢᱟᱹᱱ ᱮᱢ ᱮᱫᱟ, ᱟᱢ ᱫᱚ ᱵᱮᱼᱵᱟᱹᱛᱤᱞ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮ ᱥᱟᱶ ᱥᱟᱶᱛᱮ ᱵᱟᱡᱟᱨ, ᱵᱮᱼᱵᱟᱹᱛᱤᱞ ᱟᱨ ᱚᱱᱚᱞᱤᱠᱤᱥ ᱠᱚᱨᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱠᱩᱠᱤ ᱠᱚ ᱫᱚᱦᱚ ᱮᱫᱟ ᱾ \"ᱥᱟᱱᱟᱢᱟᱜ ᱦᱟᱛᱟᱣ ᱢᱮ\" ᱨᱮ ᱠᱞᱤᱠ ᱠᱟᱛᱮ, ᱟᱢ ᱤᱧᱟᱹᱜ ᱠᱩᱠᱤᱠᱚ ᱵᱮᱶᱦᱟᱨ ᱞᱟᱹᱜᱤᱫ ᱮ ᱥᱤᱜᱤᱞ ᱞᱮᱱᱟ ᱾ ᱟᱢ ᱡᱟᱦᱟᱸ ᱚᱠᱛᱚ ᱨᱮᱦᱚᱸ ᱟᱢᱟᱜ ᱥᱮᱴᱤᱝ ᱠᱚ ᱵᱚᱱᱚᱫᱚᱞ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ ᱠᱩᱠᱤ ᱟᱹᱨᱤ ᱾",
        "learnMore": "ᱠᱟᱥᱴᱚᱢᱟᱭᱤᱡ ᱢᱮ ᱾",
        "changeDescription": " "
      },
      "save": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
      "consentModal": {
        "title": "ᱥᱳᱯᱨᱩᱢᱟᱱᱟᱜ ᱵᱟᱪᱷᱱᱟᱣ ᱠᱚ ᱜᱚᱴᱟᱼᱵᱩᱴᱟᱹ ᱢᱮ ᱾",
        "description": "ᱟᱢ ᱫᱚ ᱯᱮᱡᱽ ᱠᱚ ᱢᱩᱫ ᱨᱮ ᱠᱟᱹᱢᱤ ᱞᱮᱠᱟᱛᱮ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱛᱮ, ᱟᱢᱟᱜ ᱵᱟᱪᱷᱱᱟᱣ ᱠᱚ ᱫᱚᱦᱚ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱥᱟᱫᱷᱟᱨᱚᱱ ᱞᱮᱠᱟᱛᱮ ᱢᱤᱫᱴᱟᱝ ᱳᱭᱮᱵᱽᱥᱟᱭᱤᱴ ᱨᱮ ᱟᱢᱟᱜ ᱩᱯᱟᱹᱭ ᱟᱨᱦᱚᱸ ᱱᱟᱯᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱛᱮ ᱟᱢ ᱠᱳᱠᱤ ᱠᱚ ᱵᱮᱣᱦᱟᱨᱼᱟ ᱾ ᱮᱱᱛᱮ ᱨᱮᱦᱚᱸ, ᱟᱢ ᱟᱢᱟᱜ ᱜᱚᱭᱟᱨᱚᱱ ᱫᱟᱲᱮᱭ ᱢᱟᱱᱟᱣ ᱟᱠᱟᱫᱟ ᱟᱨ ᱚᱱᱟᱛᱮ ᱟᱢ ᱠᱤᱪᱷᱩ ᱞᱮᱠᱟᱱ ᱠᱩᱠᱤ ᱨᱮᱭᱟᱜ ᱪᱷᱟᱹᱲ ᱵᱟᱝ ᱮᱢ ᱞᱟᱹᱜᱤᱫ ᱮ ᱵᱟᱪᱷᱱᱟᱣ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾ ᱟᱨᱦᱚᱸ ᱵᱟᱰᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱟᱢᱟᱜ ᱰᱤᱯᱷᱚᱞᱴ ᱥᱮᱴᱤᱝᱥ ᱵᱚᱱᱚᱫᱚᱞ ᱞᱟᱹᱜᱤᱫ ᱟᱭᱢᱟ ᱛᱷᱚᱱᱚᱛ ᱨᱮᱭᱟᱜ ᱦᱤᱫᱤᱝ ᱨᱮ ᱠᱞᱤᱠ ᱢᱮ ᱾ ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱢᱚᱱᱮ ᱦᱩᱭᱩᱜ ᱢᱮ ᱡᱮ ᱠᱤᱪᱷᱩᱠ ᱞᱮᱠᱟᱱ ᱠᱩᱠᱤ ᱵᱚᱱᱫᱮᱡ ᱠᱚᱨᱟᱣ ᱟᱢᱟᱜ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱩᱯᱟᱹᱭ ᱮ ᱮᱥᱮᱨ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾",
        "buttons": {
          "save": "ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
          "acceptAll": "ᱥᱟᱱᱟᱢ ᱜᱮ ᱦᱟᱛᱟᱣ ᱢᱮ ᱾",
          "decline": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾",
          "title": "ᱥᱟᱱᱟᱢᱟᱜ ᱵᱟᱛᱟᱶ ᱢᱮ ᱾"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "ᱟᱢ ᱱᱚᱶᱟ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱳᱭᱮᱵᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮᱹᱭᱟᱜᱼᱟ ᱟᱨ ᱵᱮᱣᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱩᱯᱟᱹᱭ ᱵᱟᱹᱲᱛᱤ ᱞᱟᱹᱜᱤᱫ ᱠᱚ ᱵᱮᱣᱦᱟᱨᱼᱟ ᱾ ᱰᱚᱜᱚᱨ ᱨᱮ ᱞᱚᱜᱤᱱ ᱰᱮᱴᱟ, ᱴᱚᱴᱷᱟ, ᱯᱟᱹᱨᱥᱤ ᱟᱨ ᱵᱟᱹᱲᱛᱤ ᱠᱟᱱᱴᱮᱱᱴ ᱥᱮᱞᱮᱫ ᱦᱩᱭ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ᱱᱚᱶᱟ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱳᱭᱮᱵᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱴᱨᱟᱯᱷᱤᱠ, ᱵᱮᱣᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱵᱮᱣᱦᱟᱨ ᱟᱨ ᱡᱳᱜᱟᱡᱳᱜ ᱨᱮᱭᱟᱜ ᱦᱚᱨᱟ ᱠᱚ ᱵᱤᱪᱷᱱᱟᱶ ᱞᱟᱹᱜᱤᱫ ᱜᱚᱲᱚ ᱠᱚ ᱮᱢᱼᱟ ᱾ ᱥᱮᱞᱮᱫ ᱟᱠᱟᱱ ᱚᱱᱩᱢᱟᱹᱱ ᱠᱚ ᱤᱧᱟᱹᱜ ᱛᱚᱛᱩᱛᱚ ᱥᱚᱨᱮᱥ ᱞᱟᱹᱜᱤᱫ, ᱵᱮᱣᱦᱟᱨ ᱫᱟᱲᱮ ᱵᱟᱹᱲᱛᱤ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱥᱟᱱᱟᱢ ᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱫᱟᱲᱮᱹᱭᱟᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ᱱᱚᱶᱟ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱟᱢᱟᱜ ᱞᱮᱠᱟᱛᱮ ᱩᱪᱷᱟᱹᱱ ᱮᱢ ᱞᱟᱹᱜᱤᱫ ᱟᱨ ᱵᱤᱪᱷᱱᱟᱣᱟᱱ ᱥᱟᱸᱜᱷᱟᱨ ᱨᱮᱭᱟᱜ ᱮᱥᱮᱨᱟᱱ ᱧᱮᱞ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱨᱮᱱ ᱩᱪᱷᱟᱹᱱ ᱦᱟᱹᱴᱤᱧᱤᱭᱟᱹ ᱠᱚ ᱫᱟᱨᱟᱭ ᱛᱮ ᱵᱮᱣᱦᱟᱨᱚᱜᱼᱟ ᱾ ᱩᱱᱠᱩ ᱫᱚ ᱵᱮᱶᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱮᱥᱮᱨ ᱟᱨ ᱵᱨᱟᱵᱷᱟᱡᱽ ᱵᱚᱱᱚᱫᱚᱞ ᱪᱮᱛᱟᱱ ᱴᱮᱦᱟᱴ ᱠᱟᱛᱮ ᱯᱚᱨᱟᱢᱚᱥ ᱟᱱᱟᱜ ᱯᱟᱥᱱᱟᱣ ᱮᱢ ᱨᱮ ᱜᱚᱲᱚ ᱠᱚ ᱮᱢᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ᱱᱚᱶᱟ ᱛᱷᱚᱱᱚᱛ ᱨᱮ ᱠᱳᱠᱤ ᱠᱚᱫᱚ ᱥᱮᱞᱮᱫ ᱢᱮᱱᱟᱜᱼᱟ ᱡᱟᱦᱟᱸ ᱫᱚ ᱢᱟᱲᱟᱝ ᱠᱷᱚᱱ ᱞᱟᱹᱭ ᱟᱠᱟᱱ ᱛᱷᱚᱱᱚᱛ ᱠᱚ ᱢᱩᱫᱨᱮ ᱵᱟᱝ ᱥᱮᱞᱮᱫᱚᱜᱼᱟ ᱢᱮᱱᱠᱷᱟᱱ ᱠᱤᱪᱷᱩ ᱳᱭᱮᱵᱥᱟᱭᱤᱴ ᱨᱮᱭᱟᱜ ᱠᱟᱹᱢᱤ ᱥᱮ ᱱᱟᱯᱟᱭ ᱞᱟᱹᱜᱤᱫ ᱞᱟᱹᱠᱛᱤ ᱦᱩᱭ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ᱥᱠᱳᱭᱨᱤᱴᱤ ᱠᱩᱠᱤ ᱠᱚᱫᱚ ᱯᱚᱨᱤᱢᱟᱱ, ᱞᱟᱹᱞᱤᱥ ᱵᱚᱱᱚᱫᱚᱞ ᱟᱨ ᱥᱠᱳᱭᱨᱤ ᱵᱨᱟᱣᱟᱡᱽ ᱞᱟᱹᱜᱤᱫ ᱵᱮᱣᱦᱟᱨᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱰᱮᱴᱟᱭ ᱥᱠᱳᱭᱤᱴ ᱠᱚᱨᱟᱣ ᱨᱮ ᱜᱚᱲᱚ ᱠᱚ ᱮᱢᱼᱟ ᱾ ᱩᱱᱠᱩ ᱫᱚ ᱜᱚᱴᱟ ᱞᱮᱫᱟ ᱡᱮ, ᱮᱥᱮᱨᱟᱱ ᱰᱚᱜᱚᱨ, ᱡᱮᱞᱮᱠᱟ ᱞᱚᱜᱤᱱ ᱮᱥᱮᱨᱮᱱᱰᱤᱞᱥ, ᱮᱱᱠᱨᱤᱯᱴᱰ ᱡᱳᱜᱟᱡᱳᱜ ᱛᱟᱞᱟᱛᱮ ᱱᱟᱯᱟᱭ ᱛᱮ ᱯᱟᱥᱱᱟᱣ ᱦᱳᱭᱳᱜᱼᱟ ᱾<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "brx": {
      "acceptAll": "गासिबो नाजाव",
      "accept": "नाजाव",
      "decline": "गासिबोखौ नेवसि",
      "acceptSelected": "सायख 'जानायखौ नाजाव",
      "ok": "गासिबो नाजाव",
      "consentNotice": {
        "description": "जों नोंनि प्राइभेसिखौ मान होयो जों गोनांथार साइटनि खामानिजों लोगोसे मार्केटिं, गावारि खालामनाय आरो एनालाइटिक्स खालामनो थाखाय कुकिजखौ दोनथुमो। \"गासिबो नाजाव\" आव क्लिक खालामनानै, नों जोंनि कुकिफोरनि बाहायनायखौ गनायो। नोंथाङा जायखिजाया समावनो गावनि सेटिंसखौ सोलायनो हायो। कुकि पलिसि।",
        "learnMore": "कास्टमाइज खालाम",
        "changeDescription": " "
      },
      "save": "नाजाव",
      "consentModal": {
        "title": "गनायथि सायख 'नायफोरखौ कास्टमाइज खालाम",
        "description": "जों नोंथांखौ पेजफोरनि गेजेराव मोजाङै नेभिगेट खालामनायाव मदद होनो, नोंथांनि गोसो जानायफोरखौ दोनथुमनो आरो सरासनस्रायै नोंथांनि वेबसाइटनि रोंमोनदांथिखौ साबसिन खालामनो थाखाय कुकिफोरखौ बाहायो। जिखिजायामानो, जों नोंनि गावारि मोन्थाइखौ गनायो आरो बेनिखायनो नों माखासे रोखोमनि कुकिसखौ गनायथि होनाङा सायख 'नो हायो। बांसिन मिथिनो आरो जोंनि दिफल्ट सेटिंसखौ सोलायनो थाखाय गुबुन गुबुन थाखोनि हेडिंफोराव क्लिक खालाम। अन्नानै नोजोर हो दि माखासे रोखोमनि कुकिफोरखौ बन्द खालामनाया साइटनि नोंनि रोंमोनदांथिखौ गोहोम खोख्लैनो हागौ।",
        "buttons": {
          "save": "नाजाव",
          "acceptAll": "गासिबो नाजाव",
          "decline": "गासिबोखौ नेवसि"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "गासिबोखौ नेवसि",
          "title": "गासिबोखौ नेवसि"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "जों बे कुकिफोरखौ वेबसाइटनि मावथायखौ बांहोनो आरो बाहायगिरिनि रोंमोनदांथिखौ साबसिन खालामनो बाहायो। फोरमायथियाव लगइननि खारि, ओनसोल, राव आरो बांनाय आयदाफोर थानो हागौ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "बे कुकिफोरा जोंनो वेबसाइट ट्राफिक, बाहायगिरिनि आखु आरो मावसोमनाय महरफोरखौ बिजिरनायाव मदद खालामो। बुथुमनाय मोनदांथिफोरा जोंनो आयदाफोरखौ साबसिन खालामनो, बाहायजाथावखौ बांहोनो आरो गासै साइट दिन्थिफुंनायखौ जौगाहोनो गनायथि होयो।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "बे कुकिफोरखौ जोंनि फोसावथाइ बाहागोआरिफ्रा गावारि फोसावथाइ होनो आरो फोसावथाइ फोसावथायनि गोहोमखौ जखा खालामनो बाहायो। बिसोर बाहायगिरिनि गोसो जानाय आरो ब्राउजिं आखुथायनि सायाव बिथा खालामनानै सोमोन्दो गोनां फोसावथायफोर जगायनो हेफाजाब होयो।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "बे थाखोआ बै कुकिफोरखौ लाफायो जाय सिगां थि खालामनाय थाखोफोराव थाङा नाथाय माखासे वेबसाइटनि खामानि एबा जौगाथायनि थाखाय गोनां जानो हागौ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "रैखाथि कुकिया फोरमानथि, गोरोनथि होबथाग्रा आरो रैखाथि गोनां ब्रावजिंनि गेजेरजों बाहायगिरिनि खारिखौ रैखा खालामनायाव मदद खालामो। बिसोरो रोखा खालामो दि सांग्रां खौरांफोर, जेरै लगइन फोरमानथिफोरा, इनक्रिप्टेड सुंजाबनायफोरनि गेजेरजों रैखाथिगोनाङै बारस्लायनाय जायो।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mr": {
      "acceptAll": "सर्व स्वीकारा",
      "accept": "स्वीकारा",
      "decline": "सर्व नाकारा",
      "acceptSelected": "निवडलेले स्वीकारा",
      "ok": "सर्व स्वीकारा",
      "consentNotice": {
        "description": "आम्ही तुमच्या गोपनीयतेचा आदर करतो आम्ही आवश्यक साइट कार्यक्षमता, तसेच विपणन, वैयक्तिकरण आणि विश्लेषण सक्षम करण्यासाठी कुकीज संचयित करतो. \"सर्व स्वीकारा\" वर क्लिक करून, तुम्ही आमच्या कुकीजच्या वापरास संमती देता. तुम्ही कधीही तुमचे सेटिंग बदलू शकता. कुकी धोरण.",
        "learnMore": "सानुकूलित करा",
        "changeDescription": " "
      },
      "save": "स्वीकारा",
      "consentModal": {
        "title": "संमतीची प्राधान्ये सानुकूलित करा",
        "description": "पृष्ठांदरम्यान कार्यक्षमतेने नेव्हिगेट करण्यात, तुमची प्राधान्ये संचयित करण्यात आणि सामान्यतः वेबसाइटचा तुमचा अनुभव सुधारण्यात मदत करण्यासाठी आम्ही कुकीज वापरतो. तथापि, आम्ही तुमच्या गोपनीयतेच्या अधिकाराची कबुली देतो आणि म्हणूनच तुम्ही काही प्रकारच्या कुकीजला परवानगी न देणे निवडू शकता. अधिक जाणून घेण्यासाठी आणि आपली पूर्वनिर्धारित मांडणी बदलण्यासाठी विविध श्रेणी शीर्षकांवर क्लिक करा. कृपया लक्षात घ्या की विशिष्ट प्रकारच्या कुकीज अवरोधित केल्याने तुमच्या संकेतस्थळावरील अनुभवावर परिणाम होऊ शकतो.",
        "buttons": {
          "save": "स्वीकारा",
          "acceptAll": "सर्व स्वीकारा",
          "decline": "सर्व नाकारा"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सर्व नाकारा",
          "title": "सर्व नाकारा"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "आम्ही या कुकीज वेबसाइटची कार्यक्षमता वाढविण्यासाठी आणि वापरकर्ता अनुभव सुधारण्यासाठी वापरतो. माहितीमध्ये लॉगिन डेटा, प्रदेश, भाषा आणि वर्धित सामग्री समाविष्ट असू शकते.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "या कुकीज आम्हाला वेबसाइटची रहदारी, वापरकर्त्याचे वर्तन आणि गुंतवणूकीच्या पद्धतींचे विश्लेषण करण्यात मदत करतात. गोळा केलेली अंतर्दृष्टी आम्हाला सामग्री अनुकूल करण्यास, उपयुक्तता वाढविण्यास आणि एकूण साइट कामगिरी सुधारण्यास अनुमती देते.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "या कुकीज आमच्या जाहिरात भागीदारांद्वारे वैयक्तिकृत जाहिराती देण्यासाठी आणि विपणन मोहिमांची परिणामकारकता मोजण्यासाठी वापरल्या जातात. ते वापरकर्त्याच्या आवडी आणि ब्राउझिंग वर्तनावर आधारित संबंधित जाहिराती प्रदान करण्यात मदत करतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "या श्रेणीमध्ये अशा कुकीज समाविष्ट आहेत ज्या पूर्वनिर्धारित श्रेणींमध्ये बसत नाहीत परंतु वेबसाइटच्या विशिष्ट कार्यक्षमता किंवा सुधारणांसाठी आवश्यक असू शकतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज प्रमाणीकरण, फसवणूक प्रतिबंध आणि सुरक्षित ब्राउझिंग सक्षम करून वापरकर्त्याचा डेटा संरक्षित करण्यात मदत करतात. ते हे सुनिश्चित करतात की लॉगिन प्रमाणपत्रांसारखी संवेदनशील माहिती एन्क्रिप्टेड जोडण्यांद्वारे सुरक्षितपणे प्रसारित केली जाते.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ne": {
      "acceptAll": "सबै स्वीकार गर्नुहोस्",
      "accept": "स्वीकार गर्नुहोस्",
      "decline": "सबै अस्वीकार गर्नुहोस्",
      "acceptSelected": "चुनिएको स्वीकार गर्नुहोस्",
      "ok": "सबै स्वीकार गर्नुहोस्",
      "consentNotice": {
        "description": "हामी तपाईंको गोपनीयतालाई सम्मान गर्दछौं हामी आवश्यक साइट कार्यक्षमता, साथै मार्केटिङ, निजीकरण र विश्लेषण सक्षम गर्न कुकीहरू भण्डार गर्दछौं। \"सबै स्वीकार गर्नुहोस्\" मा क्लिक गरेर, तपाईं हाम्रो कुकीजको प्रयोगमा सहमत हुनुहुन्छ। तपाईँले कुनै पनि समयमा आफ्नो सेटिङहरू परिवर्तन गर्न सक्नुहुन्छ। कुकी नीति।",
        "learnMore": "अनुकूलित गर्नुहोस्",
        "changeDescription": " "
      },
      "save": "स्वीकार गर्नुहोस्",
      "consentModal": {
        "title": "सहमति प्राथमिकताहरू अनुकूलित गर्नुहोस्",
        "description": "हामी तपाईंलाई पृष्ठहरू बिच कुशलतापूर्वक नेभिगेट गर्न, तपाईंको प्राथमिकताहरू भण्डारण गर्न, र सामान्यतया वेबसाइटको तपाईंको अनुभव सुधार गर्न मद्दत गर्न कुकीहरू प्रयोग गर्दछौं। जे होस्, हामी तपाईंको गोपनीयताको अधिकारलाई स्वीकार गर्दछौं र त्यसैले तपाईं केही प्रकारका कुकीजहरूलाई अनुमति नदिन छनौट गर्न सक्नुहुन्छ। थप पत्ता लगाउन र हाम्रो पूर्वनिर्धारित सेटिङहरू परिवर्तन गर्न विभिन्न श्रेणी शीर्षकहरूमा क्लिक गर्नुहोस्। कृपया ध्यान दिनुहोस् कि केही प्रकारका कुकीहरू अवरुद्ध गर्नाले साइटको तपाईंको अनुभवलाई असर गर्न सक्छ।",
        "buttons": {
          "save": "स्वीकार गर्नुहोस्",
          "acceptAll": "सबै स्वीकार गर्नुहोस्",
          "decline": "सबै अस्वीकार गर्नुहोस्"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सबै अस्वीकार गर्नुहोस्",
          "title": "सबै अस्वीकार गर्नुहोस्"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "हामी यी कुकीहरू वेबसाइट कार्यक्षमता बढाउन र प्रयोगकर्ता अनुभव सुधार गर्न प्रयोग गर्दछौं। जानकारीले लगइन डेटा, क्षेत्र, भाषा, र उन्नत सामग्री समावेश गर्न सक्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "यी कुकीहरूले हामीलाई वेबसाइट ट्राफिक, प्रयोगकर्ता व्यवहार, र संलग्नता ढाँचाहरू विश्लेषण गर्न मद्दत गर्दछ। एकत्रित अन्तर्दृष्टिले हामीलाई सामग्री अनुकूलन गर्न, उपयोगिता बढाउन, र समग्र साइट प्रदर्शन सुधार गर्न अनुमति दिन्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "यी कुकीहरू हाम्रा विज्ञापन साझेदारहरूद्वारा व्यक्तिगत विज्ञापनहरू वितरण गर्न र मार्केटिङ अभियानहरूको प्रभावकारिता मापन गर्न प्रयोग गरिन्छ। तिनीहरूले प्रयोगकर्ता रुचि र ब्राउजिङ व्यवहारको आधारमा सान्दर्भिक पदोन्नतिहरू प्रदान गर्न मद्दत गर्छन्।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "यस श्रेणीले कुकीहरू समावेश गर्दछ जुन पूर्वनिर्धारित कोटीहरूमा फिट हुँदैन तर निश्चित वेबसाइट प्रकार्यहरू वा सुधारहरूका लागि आवश्यक हुन सक्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीहरूले प्रमाणीकरण, धोखाधडी रोकथाम, र सुरक्षित ब्राउजिङ सक्षम गरेर प्रयोगकर्ता डेटा सुरक्षित गर्न मद्दत गर्दछ। तिनीहरूले यो सुनिश्चित गर्छन् कि संवेदनशील जानकारी, जस्तै लगइन प्रमाणहरू, इन्क्रिप्टेड जडानहरूमा सुरक्षित रूपमा प्रसारित हुन्छ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "hi": {
      "acceptAll": "सभी को स्वीकार करें",
      "accept": "स्वीकार करें",
      "decline": "सभी को अस्वीकार करें",
      "acceptSelected": "चयनित को स्वीकार करें",
      "ok": "सभी को स्वीकार करें",
      "consentNotice": {
        "description": "हम आपकी गोपनीयता का सम्मान करते हैं हम आवश्यक साइट कार्यक्षमता के साथ-साथ विपणन, वैयक्तिकरण और विश्लेषण को सक्षम करने के लिए कुकीज़ संग्रहीत करते हैं। \"सभी को स्वीकार करें\" पर क्लिक करके, आप कुकीज़ के हमारे उपयोग के लिए सहमत हैं। आप किसी भी समय अपनी सेटिंग बदल सकते हैं। कुकी नीति।",
        "learnMore": "अनुकूलित करें",
        "changeDescription": " "
      },
      "save": "स्वीकार करें",
      "consentModal": {
        "title": "सहमति वरीयताएँ अनुकूलित करें",
        "description": "हम कुकीज़ का उपयोग आपको पृष्ठों के बीच कुशलता से नेविगेट करने, आपकी प्राथमिकताओं को संग्रहीत करने और आम तौर पर किसी वेबसाइट के आपके अनुभव को बेहतर बनाने में मदद करने के लिए करते हैं। हालाँकि, हम आपकी गोपनीयता के अधिकार को स्वीकार करते हैं और इसलिए आप कुछ प्रकार की कुकीज़ की अनुमति नहीं दे सकते हैं। अधिक जानने के लिए विभिन्न श्रेणी शीर्षकों पर क्लिक करें और हमारी डिफ़ॉल्ट सेटिंग्स को बदलें। कृपया ध्यान दें कि कुछ प्रकार की कुकीज़ को अवरुद्ध करने से साइट का आपका अनुभव प्रभावित हो सकता है।",
        "buttons": {
          "save": "स्वीकार करें",
          "acceptAll": "सभी को स्वीकार करें",
          "decline": "सभी को अस्वीकार करें"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सभी को अस्वीकार करें",
          "title": "सभी को अस्वीकार करें"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "हम इन कुकीज़ का उपयोग वेबसाइट की कार्यक्षमता बढ़ाने और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए करते हैं। जानकारी में लॉगिन डेटा, क्षेत्र, भाषा और उन्नत सामग्री शामिल हो सकती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ये कुकीज़ हमें वेबसाइट ट्रैफिक, उपयोगकर्ता व्यवहार और जुड़ाव पैटर्न का विश्लेषण करने में मदद करती हैं। एकत्रित अंतर्दृष्टि हमें सामग्री को अनुकूलित करने, उपयोगिता बढ़ाने और समग्र साइट प्रदर्शन में सुधार करने की अनुमति देती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इन कुकीज़ का उपयोग हमारे विज्ञापन भागीदारों द्वारा व्यक्तिगत विज्ञापन देने और विपणन अभियानों की प्रभावशीलता को मापने के लिए किया जाता है। वे उपयोगकर्ता की रुचियों और ब्राउज़िंग व्यवहार के आधार पर प्रासंगिक प्रचार प्रदान करने में मदद करते हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "इस श्रेणी में ऐसी कुकीज़ शामिल हैं जो पूर्वनिर्धारित श्रेणियों में फिट नहीं होती हैं, लेकिन कुछ वेबसाइट कार्यक्षमताओं या सुधारों के लिए आवश्यक हो सकती हैं।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज़ प्रमाणीकरण, धोखाधड़ी की रोकथाम और सुरक्षित ब्राउज़िंग को सक्षम करके उपयोगकर्ता डेटा की सुरक्षा में मदद करती हैं। वे यह सुनिश्चित करते हैं कि संवेदनशील जानकारी, जैसे कि लॉगिन क्रेडेंशियल्स, एन्क्रिप्टेड कनेक्शनों पर सुरक्षित रूप से प्रेषित की जाती है।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "gom": {
      "acceptAll": "सगळें मान्य कर",
      "accept": "स्विकार कर",
      "decline": "सगळें न्हयकार",
      "acceptSelected": "वेंचून घेतिल्लें मान्य कर",
      "ok": "सगळें मान्य कर",
      "consentNotice": {
        "description": "आमी तुमच्या गुप्ततायेचो आदर करतात आमी गरजेचीं सायटीची कार्यक्षमताय, तशेंच मार्केटींग, वैयक्तीकरण आनी विश्लेशण सक्षम करपा खातीर कुकीज सांठोवन दवरतात. \"सगळे मान्य करात\" क्लिक केल्यार, तुमी आमचे कुकीज वापरपाक मान्यताय दितात. तुमी खंयच्याय वेळार तुमची सेटिंग बदलूंक शकतात. कुकी धोरण.",
        "learnMore": "कस्टमायझ करात",
        "changeDescription": " "
      },
      "save": "स्विकार कर",
      "consentModal": {
        "title": "संमतीची पसंती सानुकूल करात",
        "description": "पानां मदीं कुशळटायेन नेव्हिगेट करपाक, तुमची पसंती सांठोवन दवरपाक आनी सादारणपणान संकेतथळाचो तुमचो अणभव सुदारपाक आमी कुकीज वापरतात. पूण, आमी तुज्या खाजगीपणाच्या अधिकाराची मान्यताय दितात आनी देखून तूं कांय प्रकारच्या कुकीजांक परवानगी दिना अशें निवडूंक शकता. चड सोदून काडपाक आनी आमची पूर्वनिर्धारीत मांडणी बदलपाक वेगवेगळ्या श्रेणीच्या शीर्षकांचेर क्लिक करात. उपकार करून लक्षांत घेयात की कांय प्रकारच्या कुकीज आडावपाचो परिणाम तुमच्या सायटीच्या अणभवाचेर जावं येता.",
        "buttons": {
          "save": "स्विकार कर",
          "acceptAll": "सगळें मान्य कर",
          "decline": "सगळें न्हयकार"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सगळें न्हयकार",
          "title": "सगळें न्हयकार"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "संकेतथळाची कार्यक्षमताय वाडोवपा खातीर आनी वापरप्याचो अणभव सुदारपा खातीर आमी ह्यो कुकीज वापरतात. म्हायतींत लॉगीन डेटा, प्रदेश, भास, आनी वर्धित सामुग्री आसूं येता.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "हे कुकीज आमकां संकेतथळाचो ट्रॅफिक, वापरप्याची वागणूक, आनी व्यस्ततायेचे नमुने विश्लेशण करपाक मदत करतात. एकठांय केल्ली अंतर्दृष्टी आमकां सामुग्री ऑप्टिमायझ करपाक, उपेगीपण वाडोवपाक आनी एकंदर सायटाची कामगिरी सुदारपाक मदत करता.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "हे कुकीज आमचे जायरात भागीदार वैयक्तीक जायराती दिवपा खातीर आनी विपणन मोहिमांची परिणामकारकता मेजपा खातीर वापरतात. वापरप्याची आवड आनी ब्राउझिंग वेव्हाराचेर आदारून संबंदीत बडटी दिवपाक ते मदत करतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ह्या श्रेणींत कुकीज आसतात ज्यो पूर्वनिर्धारित श्रेणींत बसनात पूण कांय संकेतथळाची कार्यक्षमताय वा सुदारणां खातीर गरजेच्यो आसूं येतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज प्रमाणीकरण, फसवणूक आडावप, आनी सुरक्षीत ब्राउझिंग सक्षम करून वापरप्याचो डेटा राखपाक मदत करतात. लॉगीन प्रमाणपत्रां सारकी संवेदनशील म्हायती एन्क्रिप्टेड जोडणींतल्यान सुरक्षीतपणान धाडटात हाची खात्री ते करतात.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "pa": {
      "acceptAll": "ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
      "accept": "ਸਵੀਕਾਰ ਕਰੋ",
      "decline": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ",
      "acceptSelected": "ਚੁਣੇ ਹੋਏ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
      "ok": "ਸਭ ਸਵੀਕਾਰ ਕਰੋ",
      "consentNotice": {
        "description": "ਅਸੀਂ ਤੁਹਾਡੀ ਗੋਪਨੀਯਤਾ ਦਾ ਸਨਮਾਨ ਕਰਦੇ ਹਾਂ ਅਸੀਂ ਜ਼ਰੂਰੀ ਸਾਈਟ ਕਾਰਜਕੁਸ਼ਲਤਾ ਦੇ ਨਾਲ ਨਾਲ ਮਾਰਕੀਟਿੰਗ, ਵਿਅਕਤੀਗਤਕਰਨ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਨੂੰ ਸਮਰੱਥ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਨੂੰ ਸਟੋਰ ਕਰਦੇ ਹਾਂ। \"ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ\" ਉੱਤੇ ਕਲਿਕ ਕਰਕੇ, ਤੁਸੀਂ ਸਾਡੀਆਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਲਈ ਸਹਿਮਤੀ ਦਿੰਦੇ ਹੋ। ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਆਪਣੀਆਂ ਸੈਟਿੰਗਾਂ ਨੂੰ ਬਦਲ ਸਕਦੇ ਹੋ। ਕੂਕੀ ਨੀਤੀ.",
        "learnMore": "ਅਨੁਕੂਲਿਤ ਕਰੋ",
        "changeDescription": " "
      },
      "save": "ਸਵੀਕਾਰ ਕਰੋ",
      "consentModal": {
        "title": "ਸਹਿਮਤੀ ਤਰਜੀਹਾਂ ਨੂੰ ਅਨੁਕੂਲਿਤ ਕਰੋ",
        "description": "ਅਸੀਂ ਪੰਨਿਆਂ ਵਿਚਕਾਰ ਕੁਸ਼ਲਤਾ ਨਾਲ ਨੈਵੀਗੇਟ ਕਰਨ, ਤੁਹਾਡੀਆਂ ਤਰਜੀਹਾਂ ਨੂੰ ਸੰਭਾਲਣ ਅਤੇ ਆਮ ਤੌਰ 'ਤੇ ਕਿਸੇ ਵੈੱਬਸਾਈਟ ਦੇ ਤੁਹਾਡੇ ਤਜ਼ਰਬੇ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਾਂ। ਹਾਲਾਂਕਿ, ਅਸੀਂ ਤੁਹਾਡੇ ਗੋਪਨੀਯਤਾ ਦੇ ਅਧਿਕਾਰ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹਾਂ ਅਤੇ ਇਸ ਲਈ ਤੁਸੀਂ ਕੁੱਝ ਕਿਸਮਾਂ ਦੀਆਂ ਕੂਕੀਜ਼ ਦੀ ਆਗਿਆ ਨਾ ਦੇਣ ਦੀ ਚੋਣ ਕਰ ਸਕਦੇ ਹੋ। ਹੋਰ ਜਾਣਨ ਅਤੇ ਸਾਡੀਆਂ ਡਿਫਾਲਟ ਸੈਟਿੰਗਾਂ ਨੂੰ ਬਦਲਣ ਲਈ ਵੱਖ-ਵੱਖ ਸ਼੍ਰੇਣੀ ਸਿਰਲੇਖਾਂ 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਕਿਰਪਾ ਕਰਕੇ ਨੋਟ ਕਰੋ ਕਿ ਕੁੱਝ ਕਿਸਮਾਂ ਦੀਆਂ ਕੂਕੀਜ਼ ਨੂੰ ਰੋਕਣਾ ਸਾਈਟ ਦੇ ਤੁਹਾਡੇ ਤਜ਼ਰਬੇ ਨੂੰ ਪ੍ਰਭਾਵਤ ਕਰ ਸਕਦਾ ਹੈ।",
        "buttons": {
          "save": "ਸਵੀਕਾਰ ਕਰੋ",
          "acceptAll": "ਸਭ ਨੂੰ ਸਵੀਕਾਰ ਕਰੋ",
          "decline": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ",
          "title": "ਸਭ ਨੂੰ ਰੱਦ ਕਰੋ"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "ਅਸੀਂ ਇਨ੍ਹਾਂ ਕੂਕੀਜ਼ ਦੀ ਵਰਤੋਂ ਵੈੱਬਸਾਈਟ ਦੀ ਕਾਰਜਕੁਸ਼ਲਤਾ ਨੂੰ ਵਧਾਉਣ ਅਤੇ ਉਪਭੋਗਤਾ ਅਨੁਭਵ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਕਰਦੇ ਹਾਂ। ਜਾਣਕਾਰੀ ਵਿੱਚ ਲੌਗਇਨ ਡੇਟਾ, ਖੇਤਰ, ਭਾਸ਼ਾ ਅਤੇ ਵਧੀ ਹੋਈ ਸਮੱਗਰੀ ਸ਼ਾਮਲ ਹੋ ਸਕਦੀ ਹੈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ਇਹ ਕੂਕੀਜ਼ ਸਾਨੂੰ ਵੈੱਬਸਾਈਟ ਟ੍ਰੈਫਿਕ, ਉਪਭੋਗਤਾ ਵਿਵਹਾਰ ਅਤੇ ਰੁਝੇਵਿਆਂ ਦੇ ਪੈਟਰਨਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦੀਆਂ ਹਨ। ਇਕੱਠੀ ਕੀਤੀ ਗਈ ਸੂਝ ਸਾਨੂੰ ਸਮੱਗਰੀ ਨੂੰ ਅਨੁਕੂਲ ਬਣਾਉਣ, ਉਪਯੋਗਤਾ ਵਧਾਉਣ ਅਤੇ ਸਮੁੱਚੀ ਸਾਈਟ ਪ੍ਰਦਰਸ਼ਨ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਦੀ ਆਗਿਆ ਦਿੰਦੀ ਹੈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ਇਹ ਕੂਕੀਜ਼ ਸਾਡੇ ਵਿਗਿਆਪਨ ਭਾਈਵਾਲਾਂ ਦੁਆਰਾ ਵਿਅਕਤੀਗਤ ਵਿਗਿਆਪਨ ਪ੍ਰਦਾਨ ਕਰਨ ਅਤੇ ਮਾਰਕੀਟਿੰਗ ਮੁਹਿੰਮਾਂ ਦੀ ਪ੍ਰਭਾਵਸ਼ੀਲਤਾ ਨੂੰ ਮਾਪਣ ਲਈ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਉਹ ਉਪਭੋਗਤਾ ਦੀਆਂ ਰੁਚੀਆਂ ਅਤੇ ਬ੍ਰਾਊਜ਼ਿੰਗ ਵਿਵਹਾਰ ਦੇ ਅਧਾਰ ਤੇ ਢੁਕਵੀਂ ਤਰੱਕੀ ਪ੍ਰਦਾਨ ਕਰਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦੇ ਹਨ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੂਕੀਜ਼ ਸ਼ਾਮਲ ਹਨ ਜੋ ਪਹਿਲਾਂ ਤੋਂ ਪ੍ਰਭਾਸ਼ਿਤ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਫਿੱਟ ਨਹੀਂ ਹੁੰਦੀਆਂ ਪਰ ਕੁਝ ਵੈੱਬਸਾਈਟ ਕਾਰਜਕੁਸ਼ਲਤਾ ਜਾਂ ਸੁਧਾਰਾਂ ਲਈ ਜ਼ਰੂਰੀ ਹੋ ਸਕਦੀਆਂ ਹਨ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ਸੁਰੱਖਿਆ ਕੂਕੀਜ਼ ਪ੍ਰਮਾਣਿਕਤਾ, ਧੋਖਾਧਡ਼ੀ ਦੀ ਰੋਕਥਾਮ ਅਤੇ ਸੁਰੱਖਿਅਤ ਬ੍ਰਾਊਜ਼ਿੰਗ ਨੂੰ ਸਮਰੱਥ ਬਣਾ ਕੇ ਉਪਭੋਗਤਾ ਡੇਟਾ ਦੀ ਸੁਰੱਖਿਆ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਦੀਆਂ ਹਨ। ਉਹ ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕਰਦੇ ਹਨ ਕਿ ਸੰਵੇਦਨਸ਼ੀਲ ਜਾਣਕਾਰੀ, ਜਿਵੇਂ ਕਿ ਲੌਗਇਨ ਪ੍ਰਮਾਣ ਪੱਤਰ, ਐਨਕ੍ਰਿਪਟਡ ਕੁਨੈਕਸ਼ਨਾਂ ਉੱਤੇ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਪ੍ਰਸਾਰਿਤ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "sa": {
      "acceptAll": "सर्वं स्वीकरोतु",
      "accept": "स्वीकरोतु",
      "decline": "सर्वं निराकरोतु",
      "acceptSelected": "चयनं स्वीकरोतु",
      "ok": "सर्वं स्वीकरोतु",
      "consentNotice": {
        "description": "वयं भवतः गोपनीयतायाः आदरं कुर्वन्ति, वयं आवश्यक-जालपुट-कार्यक्षमतां, अपि च विपणनं, वैयक्तिकरणं, विश्लेषणं च समर्थयितुं कुकीस् सञ्चालयामः। \"सर्वान् स्वीकरोतु\" इति क्लिक् कृत्वा, भवान् अस्माकं कुकीस् इत्यस्य उपयोगाय सम्मतिं ददति। भवान् कस्मिंश्चित् अपि स्वस्य सेट्टिङ्ग्स् परिवर्तयितुं शक्नोति। कुकी नीतिः।",
        "learnMore": "कस्टमैस् कुरु",
        "changeDescription": " "
      },
      "save": "स्वीकरोतु",
      "consentModal": {
        "title": "सहमतिप्राधान्यतां स्वकीयीकरोतु",
        "description": "वयं कुकीस् इत्येतान् भवतां पृष्ठानां मध्ये दक्षतया मार्गनिर्देशयितुं, भवतः प्राथमिकतां सञ्चारं कर्तुं, सामान्यतया भवतः जालपुटानुभवं वर्धयितुं च उपयुज्यामः। तथापि, वयं भवतः गोपनीयतायाः अधिकारम् अङ्गीकृष्यामः, अतः भवान् केषुचित् प्रकाराणां कुकीस् इत्येतान् न अनुमन्येताम् इति चयनं कर्तुं शक्नोति। विभिन्नवर्गस्य शीर्षकेषु क्लिक् कुर्वन्तु, येन अधिकं ज्ञातुं, अस्मैः पूर्वनिर्धारितानि सेट्टिङ्ग्स् च परिवर्तयितुं शक्नुयात्। कृपया लक्षयतु यत् कतिपयप्रकाराणां कुकीस् इत्येतान् अवरुद्धं कुर्वन् भवतः जालपुटस्य अनुभवः प्रभावितः भवेत्।",
        "buttons": {
          "save": "स्वीकरोतु",
          "acceptAll": "सर्वं स्वीकरोतु",
          "decline": "सर्वं निराकरोतु"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सर्वं निराकरोतु",
          "title": "सर्वं निराकरोतु"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "वयं एतान् कुकीस् इत्येतान् जालपुटस्य कार्यक्षमतां वर्धयितुं तथा उपयोक्तृानुभवं वर्धयितुं उपयुज्यामः। सूचनायां प्रवेश-दत्तांशः, प्रदेशः, भाषा, वर्धित-विषयवस्तु च भवितुम् अर्हति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "एते कुकीस् इत्येताः जालपुटस्य यातायातस्य, उपयोक्तृ-व्यवहारस्य, संलग्नता-विन्यासस्य च विश्लेषणार्थं साहाय्यं कुर्वन्ति। सङ्गृहीताः अन्तर्दृष्टयः सामग्रीं अनुकूलतां कर्तुं, उपयोगितां वर्धयितुं, समग्र-जालस्थल-प्रदर्शनं च वर्धयितुं साहाय्यं कुर्वन्ति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "एताः कुकीस्-विशेषाः अस्माकं विज्ञापन-सहभागिभिः व्यक्तिगत-विज्ञापनं दातुं, विपणन-अभियानानां प्रभावशीलतां मापयितुं च उपयुज्यन्ते। ते उपयोक्तृ-रुचिभिः, विहरण-व्यवहारस्य च आधारेण प्रासङ्गिक-प्रचारान् प्रदातुं साहाय्यं कुर्वन्ति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "अस्मिन् वर्गे कुकीस् इत्येतानि अन्तर्भवन्ति यानि पूर्वनिर्धारितेषु वर्गेषु न योजयन्ति परन्तु कतिपय-जालपुट-क्रियात्मकतायै वा सुधाराय वा आवश्यकानि भवितुम् अर्हन्ति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा-कुकी-विशेषाः प्रमाणीकरणं, कपट-निवारणं, सुरक्षित-निरीक्षणं च समर्थयित्वा उपयोक्तृ-दत्तांशस्य संरक्षणे साहाय्यं कुर्वन्ति। ते सुनिश्चितं कुर्वन्ति यत् संवेदनायुक्तसूचनाः, यथा प्रवेशप्रमाणपत्राणि, एन्क्रिप्टेड्-सम्पर्केषु सुरक्षिततया प्रेष्यन्ते इति।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "sd": {
      "acceptAll": "سڀ قبول ڪريو",
      "accept": "قبول ڪريو",
      "decline": "سڀ رد ڪريو",
      "acceptSelected": "چونڊيل قبول ڪريو",
      "ok": "سڀ قبول ڪريو",
      "consentNotice": {
        "description": "اسان توهان جي رازداري جو احترام ڪريون ٿا اسان ڪوڪيز کي ذخيرو ڪريون ٿا ته جيئن سائيٽ جي ضروري ڪارڪردگي، انهي سان گڏ مارڪيٽنگ، ذاتي ڪرڻ ۽ تجزياتي کي فعال بڻائي سگهجي. &quot;سڀ قبول ڪريو&quot; تي ڪلڪ ڪندي، توهان ڪوڪيز جي اسان جي استعمال تي رضامند آهيو. توهان ڪنهن به وقت پنهنجون سيٽنگون تبديل ڪري سگهو ٿا. ڪوڪيز پاليسي.",
        "learnMore": "ترتيب ڏيو",
        "changeDescription": " "
      },
      "save": "قبول ڪريو",
      "consentModal": {
        "title": "رضامندي ترجيحن کي ترتيب ڏيو",
        "description": "اسين ڪوڪيز استعمال ڪندا آهيون ته جيئن توهان کي صفحن جي وچ ۾ موثر طريقي سان نيويگيٽ ڪرڻ، توهان جي ترجيحن کي محفوظ ڪرڻ، ۽ عام طور تي ويب سائيٽ جي تجربي کي بهتر بڻائڻ ۾ مدد ملي سگهي. بهرحال، اسان توهان جي رازداري جي حق کي تسليم ڪريون ٿا ۽ تنهن ڪري توهان ڪجهه قسمن جي ڪوڪيز کي اجازت نه ڏيڻ جو انتخاب ڪري سگهو ٿا. وڌيڪ ڄاڻڻ ۽ اسان جي ڊفالٽ سيٽنگون تبديل ڪرڻ لاءِ مختلف ڪيٽيگري هيڊنگ تي ڪلڪ ڪريو. مهرباني ڪري نوٽ ڪريو ته ڪجهه قسمن جي ڪوڪيز کي بلاڪ ڪرڻ سان سائيٽ جي توهان جي تجربي تي اثر پئجي سگهي ٿو.",
        "buttons": {
          "save": "قبول ڪريو",
          "acceptAll": "سڀ قبول ڪريو",
          "decline": "سڀ رد ڪريو"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "سڀ رد ڪريو",
          "title": "سڀ رد ڪريو"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "اسين ويب سائيٽ جي ڪارڪردگي کي وڌائڻ ۽ صارف جي تجربي کي بهتر بڻائڻ لاءِ اهي ڪوڪيز استعمال ڪندا آهيون. معلومات ۾ لاگ ان ڊيٽا، علائقو، ٻولي، ۽ بهتر ڪيل مواد شامل ٿي سگھي ٿو.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "هي ڪوڪيز اسان کي ويب سائيٽ ٽرئفڪ، صارف جي رويي، ۽ مصروفيت جي نمونن جو تجزيو ڪرڻ ۾ مدد ڪن ٿيون. گڏ ڪيل بصيرت اسان کي مواد کي بهتر ڪرڻ، استعمال جي قابليت کي وڌائڻ، ۽ مجموعي سائيٽ جي ڪارڪردگي کي بهتر بڻائڻ جي اجازت ڏين ٿيون.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "اهي ڪوڪيز اسان جي اشتهارن جي ڀائيوارن پاران ذاتي اشتهارن کي پهچائڻ ۽ مارڪيٽنگ مهم جي اثرائتي کي ماپڻ لاءِ استعمال ڪيون وينديون آهن. اهي صارف جي دلچسپين ۽ برائوزنگ رويي جي بنياد تي لاڳاپيل پروموشن مهيا ڪرڻ ۾ مدد ڪن ٿيون.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "هن ڪيٽيگري ۾ اهڙيون ڪوڪيز شامل آهن جيڪي اڳواٽ بيان ڪيل ڪيٽيگريز ۾ نه ٿيون اچن پر ڪجهه ويب سائيٽ جي ڪارڪردگي يا بهتري لاءِ ضروري ٿي سگهن ٿيون.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "سيڪيورٽي ڪوڪيز تصديق، فراڊ جي روڪٿام، ۽ محفوظ برائوزنگ کي فعال ڪندي صارف جي ڊيٽا جي حفاظت ۾ مدد ڪن ٿيون. اهي يقيني بڻائين ٿيون ته حساس معلومات، جهڙوڪ لاگ ان سندون، محفوظ طور تي انڪرپٽ ٿيل ڪنيڪشن تي منتقل ٿين ٿيون.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "bn": {
      "acceptAll": "সব গ্রহণ করুন",
      "accept": "গ্রহণ করুন",
      "decline": "সব প্রত্যাখ্যান করুন",
      "acceptSelected": "নির্বাচিত গ্রহণ করুন",
      "ok": "সব গ্রহণ করুন",
      "consentNotice": {
        "description": "আমরা আপনার গোপনীয়তাকে সম্মান করি। সাইটের অপরিহার্য কার্যকারিতা, সেইসাথে মার্কেটিং, পার্সোনালাইজেশন এবং অ্যানালিটিক্স সক্ষম করার জন্য আমরা কুকি সংরক্ষণ করি। “সব গ্রহণ করুন”-এ ক্লিক করার মাধ্যমে, আপনি আমাদের কুকি ব্যবহারে সম্মতি দিচ্ছেন। আপনি যেকোনো সময় আপনার সেটিংস পরিবর্তন করতে পারেন। কুকি নীতি।",
        "learnMore": "কাস্টমাইজ করুন",
        "changeDescription": " "
      },
      "save": "গ্রহণ করুন",
      "consentModal": {
        "title": "সম্মতি পছন্দগুলি কাস্টমাইজ করুন",
        "description": "আমরা আপনাকে পৃষ্ঠাগুলির মধ্যে দক্ষতার সাথে চলাচল করতে সাহায্য করতে, আপনার পছন্দগুলি সংরক্ষণ করতে এবং সাধারণভাবে একটি ওয়েবসাইটে আপনার অভিজ্ঞতা উন্নত করতে কুকি ব্যবহার করি। তবে, আমরা আপনার গোপনীয়তার অধিকারকে সম্মান করি এবং তাই আপনি কিছু ধরণের কুকি অনুমোদন না করার সিদ্ধান্ত নিতে পারেন। আরও জানতে এবং আমাদের ডিফল্ট সেটিংস পরিবর্তন করতে বিভিন্ন বিভাগের শিরোনামে ক্লিক করুন। অনুগ্রহ করে মনে রাখবেন যে নির্দিষ্ট ধরণের কুকি ব্লক করলে সাইটটিতে আপনার অভিজ্ঞতা প্রভাবিত হতে পারে।",
        "buttons": {
          "save": "গ্রহণ করুন",
          "acceptAll": "সব গ্রহণ করুন",
          "decline": "সব প্রত্যাখ্যান করুন"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "সব প্রত্যাখ্যান করুন",
          "title": "সব প্রত্যাখ্যান করুন"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "ওয়েবসাইটের কার্যকারিতা বাড়াতে এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে আমরা এই কুকিগুলো ব্যবহার করি। এই তথ্যের মধ্যে লগইন ডেটা, অঞ্চল, ভাষা এবং উন্নত মানের কন্টেন্ট অন্তর্ভুক্ত থাকতে পারে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "এই কুকিগুলো আমাদের ওয়েবসাইটের ট্র্যাফিক, ব্যবহারকারীর আচরণ এবং সম্পৃক্ততার ধরণ বিশ্লেষণ করতে সাহায্য করে। সংগৃহীত তথ্য আমাদের কনটেন্ট অপ্টিমাইজ করতে, ব্যবহারযোগ্যতা বাড়াতে এবং সাইটের সার্বিক পারফরম্যান্স উন্নত করতে সহায়তা করে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "এই কুকিগুলো আমাদের বিজ্ঞাপন অংশীদাররা ব্যক্তিগতকৃত বিজ্ঞাপন সরবরাহ করতে এবং বিপণন প্রচারণার কার্যকারিতা পরিমাপ করতে ব্যবহার করে। এগুলো ব্যবহারকারীর আগ্রহ এবং ব্রাউজিং আচরণের উপর ভিত্তি করে প্রাসঙ্গিক প্রচারণা প্রদানে সহায়তা করে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "এই বিভাগে এমন কুকিগুলো অন্তর্ভুক্ত রয়েছে যা পূর্বনির্ধারিত বিভাগগুলোর অন্তর্ভুক্ত নয়, কিন্তু ওয়েবসাইটের নির্দিষ্ট কার্যকারিতা বা উন্নতির জন্য প্রয়োজনীয় হতে পারে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "নিরাপত্তা কুকি প্রমাণীকরণ, জালিয়াতি প্রতিরোধ এবং নিরাপদ ব্রাউজিং সক্ষম করার মাধ্যমে ব্যবহারকারীর ডেটা সুরক্ষিত রাখতে সাহায্য করে। এগুলি নিশ্চিত করে যে লগইন ক্রেডেনশিয়ালের মতো সংবেদনশীল তথ্য এনক্রিপ্টেড সংযোগের মাধ্যমে নিরাপদে প্রেরণ করা হয়।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "te": {
      "acceptAll": "అన్నింటినీ అంగీకరించండి",
      "accept": "అంగీకరించు",
      "decline": "అన్నింటినీ తిరస్కరించండి",
      "acceptSelected": "ఎంచుకున్న వాటిని అంగీకరించండి",
      "ok": "అన్నింటినీ అంగీకరించండి",
      "consentNotice": {
        "description": "మేము మీ గోప్యతను గౌరవిస్తాము. సైట్ యొక్క ముఖ్యమైన కార్యాచరణను, అలాగే మార్కెటింగ్, వ్యక్తిగతీకరణ మరియు విశ్లేషణలను ప్రారంభించడానికి మేము కుకీలను నిల్వ చేస్తాము. “అన్నింటినీ అంగీకరించు”పై క్లిక్ చేయడం ద్వారా, మీరు మా కుకీల వినియోగానికి సమ్మతిస్తున్నారు. మీరు మీ సెట్టింగ్‌లను ఎప్పుడైనా మార్చుకోవచ్చు. కుకీ విధానం.",
        "learnMore": "అనుకూలీకరించండి",
        "changeDescription": " "
      },
      "save": "అంగీకరించు",
      "consentModal": {
        "title": "సమ్మతి ప్రాధాన్యతలను అనుకూలీకరించండి",
        "description": "పేజీల మధ్య సమర్థవంతంగా నావిగేట్ చేయడానికి, మీ ప్రాధాన్యతలను నిల్వ చేయడానికి, మరియు సాధారణంగా వెబ్‌సైట్‌తో మీ అనుభవాన్ని మెరుగుపరచడానికి మేము కుకీలను ఉపయోగిస్తాము. అయితే, మేము మీ గోప్యతా హక్కును గుర్తిస్తాము, కాబట్టి మీరు కొన్ని రకాల కుకీలను అనుమతించకూడదని ఎంచుకోవచ్చు. మరింత తెలుసుకోవడానికి మరియు మా డిఫాల్ట్ సెట్టింగ్‌లను మార్చడానికి వివిధ వర్గాల శీర్షికలపై క్లిక్ చేయండి. దయచేసి గమనించండి, కొన్ని రకాల కుకీలను బ్లాక్ చేయడం వలన సైట్‌తో మీ అనుభవం ప్రభావితం కావచ్చు.",
        "buttons": {
          "save": "అంగీకరించు",
          "acceptAll": "అన్నింటినీ అంగీకరించండి",
          "decline": "అన్నింటినీ తిరస్కరించండి"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "అన్నింటినీ తిరస్కరించండి",
          "title": "అన్నింటినీ తిరస్కరించండి"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "వెబ్‌సైట్ పనితీరును మెరుగుపరచడానికి మరియు వినియోగదారు అనుభవాన్ని మెరుగుపరచడానికి మేము ఈ కుకీలను ఉపయోగిస్తాము. ఈ సమాచారంలో లాగిన్ డేటా, ప్రాంతం, భాష మరియు మెరుగైన కంటెంట్ వంటివి ఉండవచ్చు.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ఈ కుకీలు వెబ్‌సైట్ ట్రాఫిక్, వినియోగదారు ప్రవర్తన మరియు ఎంగేజ్‌మెంట్ ప్యాటర్న్‌లను విశ్లేషించడానికి మాకు సహాయపడతాయి. సేకరించిన అంతర్దృష్టులు కంటెంట్‌ను ఆప్టిమైజ్ చేయడానికి, వినియోగ సౌలభ్యాన్ని మెరుగుపరచడానికి మరియు మొత్తం సైట్ పనితీరును మెరుగుపరచడానికి మాకు వీలు కల్పిస్తాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "మా ప్రకటనల భాగస్వాములు వ్యక్తిగతీకరించిన ప్రకటనలను అందించడానికి మరియు మార్కెటింగ్ ప్రచారాల ప్రభావాన్ని కొలవడానికి ఈ కుకీలను ఉపయోగిస్తారు. ఇవి వినియోగదారుల ఆసక్తులు మరియు బ్రౌజింగ్ ప్రవర్తన ఆధారంగా సంబంధిత ప్రమోషన్‌లను అందించడంలో సహాయపడతాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ఈ వర్గంలో ముందుగా నిర్వచించిన వర్గాలలోకి సరిపోని కుకీలు ఉంటాయి, కానీ అవి కొన్ని వెబ్‌సైట్ కార్యాచరణలకు లేదా మెరుగుదలలకు అవసరం కావచ్చు.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "భద్రతా కుకీలు ప్రామాణీకరణ, మోసాల నివారణ మరియు సురక్షిత బ్రౌజింగ్‌ను సాధ్యం చేయడం ద్వారా వినియోగదారు డేటాను రక్షించడంలో సహాయపడతాయి. లాగిన్ ఆధారాల వంటి సున్నితమైన సమాచారం ఎన్‌క్రిప్టెడ్ కనెక్షన్‌ల ద్వారా సురక్షితంగా ప్రసారం చేయబడుతుందని అవి నిర్ధారిస్తాయి.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "gu": {
      "acceptAll": "બધા સ્વીકારો",
      "accept": "સ્વીકારો",
      "decline": "બધાને નકારો",
      "acceptSelected": "પસંદ કરેલ સ્વીકારો",
      "ok": "બધા સ્વીકારો",
      "consentNotice": {
        "description": "અમે તમારી ગોપનીયતાનો આદર કરીએ છીએ. અમે સાઇટની આવશ્યક કાર્યક્ષમતા, તેમજ માર્કેટિંગ, વૈયક્તિકરણ અને વિશ્લેષણને સક્ષમ કરવા માટે કૂકીઝનો સંગ્રહ કરીએ છીએ. &quot;બધા સ્વીકારો&quot; પર ક્લિક કરીને, તમે કૂકીઝના અમારા ઉપયોગ માટે સંમતિ આપો છો. તમે કોઈપણ સમયે તમારી સેટિંગ્સ બદલી શકો છો. કૂકી નીતિ.",
        "learnMore": "કસ્ટમાઇઝ કરો",
        "changeDescription": " "
      },
      "save": "સ્વીકારો",
      "consentModal": {
        "title": "સંમતિ પસંદગીઓને કસ્ટમાઇઝ કરો",
        "description": "અમે કૂકીઝનો ઉપયોગ તમને પૃષ્ઠો વચ્ચે કાર્યક્ષમ રીતે નેવિગેટ કરવામાં, તમારી પસંદગીઓને સંગ્રહિત કરવામાં અને સામાન્ય રીતે વેબસાઇટના તમારા અનુભવને સુધારવામાં મદદ કરવા માટે કરીએ છીએ. જો કે, અમે તમારા ગોપનીયતાના અધિકારને સ્વીકારીએ છીએ અને તેથી તમે અમુક પ્રકારની કૂકીઝને મંજૂરી ન આપવાનું પસંદ કરી શકો છો. વધુ જાણવા અને અમારી ડિફોલ્ટ સેટિંગ્સ બદલવા માટે વિવિધ શ્રેણીના શીર્ષકો પર ક્લિક કરો. કૃપા કરીને નોંધ લો કે ચોક્કસ પ્રકારની કૂકીઝને અવરોધિત કરવાથી સાઇટના તમારા અનુભવને અસર થઈ શકે છે.",
        "buttons": {
          "save": "સ્વીકારો",
          "acceptAll": "બધા સ્વીકારો",
          "decline": "બધાને નકારો"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "બધાને નકારો",
          "title": "બધાને નકારો"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "અમે આ કૂકીઝનો ઉપયોગ વેબસાઇટની કાર્યક્ષમતા વધારવા અને વપરાશકર્તા અનુભવ સુધારવા માટે કરીએ છીએ. માહિતીમાં લોગિન ડેટા, પ્રદેશ, ભાષા અને ઉન્નત સામગ્રી શામેલ હોઈ શકે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "આ કૂકીઝ અમને વેબસાઇટ ટ્રાફિક, વપરાશકર્તા વર્તણૂક અને જોડાણ પેટર્નનું વિશ્લેષણ કરવામાં મદદ કરે છે. એકત્રિત કરેલી આંતરદૃષ્ટિ અમને સામગ્રીને ઑપ્ટિમાઇઝ કરવા, ઉપયોગીતા વધારવા અને એકંદર સાઇટ પ્રદર્શનને સુધારવાની મંજૂરી આપે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "આ કૂકીઝનો ઉપયોગ અમારા જાહેરાત ભાગીદારો દ્વારા વ્યક્તિગત જાહેરાતો પહોંચાડવા અને માર્કેટિંગ ઝુંબેશની અસરકારકતા માપવા માટે કરવામાં આવે છે. તે વપરાશકર્તાની રુચિઓ અને બ્રાઉઝિંગ વર્તણૂકના આધારે સંબંધિત પ્રમોશન પ્રદાન કરવામાં મદદ કરે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "આ શ્રેણીમાં એવી કૂકીઝનો સમાવેશ થાય છે જે પૂર્વવ્યાખ્યાયિત શ્રેણીઓમાં બંધબેસતી નથી પરંતુ ચોક્કસ વેબસાઇટ કાર્યક્ષમતા અથવા સુધારાઓ માટે જરૂરી હોઈ શકે છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "સુરક્ષા કૂકીઝ પ્રમાણીકરણ, છેતરપિંડી નિવારણ અને સુરક્ષિત બ્રાઉઝિંગને સક્ષમ કરીને વપરાશકર્તા ડેટાને સુરક્ષિત કરવામાં મદદ કરે છે. તેઓ ખાતરી કરે છે કે લોગિન ઓળખપત્રો જેવી સંવેદનશીલ માહિતી, એન્ક્રિપ્ટેડ કનેક્શન્સ પર સુરક્ષિત રીતે પ્રસારિત થાય છે.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ur": {
      "acceptAll": "سب کو قبول کریں۔",
      "accept": "قبول کریں۔",
      "decline": "سب کو مسترد کریں۔",
      "acceptSelected": "منتخب شدہ کو قبول کریں۔",
      "ok": "سب کو قبول کریں۔",
      "consentNotice": {
        "description": "ہم آپ کی پرائیویسی کا احترام کرتے ہیں ہم سائٹ کی ضروری فعالیت کے ساتھ ساتھ مارکیٹنگ، پرسنلائزیشن اور تجزیات کو فعال کرنے کے لیے کوکیز اسٹور کرتے ہیں۔ &quot;سب کو قبول کریں&quot; پر کلک کرکے، آپ ہماری کوکیز کے استعمال سے اتفاق کرتے ہیں۔ آپ کسی بھی وقت اپنی ترتیبات تبدیل کر سکتے ہیں۔ کوکی پالیسی۔",
        "learnMore": "حسب ضرورت بنائیں",
        "changeDescription": " "
      },
      "save": "قبول کریں۔",
      "consentModal": {
        "title": "رضامندی کی ترجیحات کو حسب ضرورت بنائیں",
        "description": "ہم آپ کو صفحات کے درمیان موثر انداز میں تشریف لے جانے، آپ کی ترجیحات کو ذخیرہ کرنے، اور عام طور پر کسی ویب سائٹ کے بارے میں آپ کے تجربے کو بہتر بنانے میں مدد کے لیے کوکیز کا استعمال کرتے ہیں۔ تاہم، ہم آپ کے رازداری کے حق کو تسلیم کرتے ہیں اور اس لیے آپ کچھ قسم کی کوکیز کی اجازت نہ دینے کا انتخاب کر سکتے ہیں۔ مزید جاننے کے لیے مختلف زمرہ کے عنوانات پر کلک کریں اور ہماری ڈیفالٹ سیٹنگز کو تبدیل کریں۔ براہ کرم نوٹ کریں کہ مخصوص قسم کی کوکیز کو مسدود کرنا آپ کے سائٹ کے تجربے کو متاثر کر سکتا ہے۔",
        "buttons": {
          "save": "قبول کریں۔",
          "acceptAll": "سب کو قبول کریں۔",
          "decline": "سب کو مسترد کریں۔"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "سب کو مسترد کریں۔",
          "title": "سب کو مسترد کریں۔"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "ہم ویب سائٹ کی فعالیت کو بڑھانے اور صارف کے تجربے کو بہتر بنانے کے لیے ان کوکیز کا استعمال کرتے ہیں۔ معلومات میں لاگ ان ڈیٹا، علاقہ، زبان، اور بہتر مواد شامل ہو سکتا ہے۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "یہ کوکیز ویب سائٹ ٹریفک، صارف کے رویے، اور مشغولیت کے نمونوں کا تجزیہ کرنے میں ہماری مدد کرتی ہیں۔ جمع کی گئی بصیرتیں ہمیں مواد کو بہتر بنانے، استعمال کو بڑھانے اور سائٹ کی مجموعی کارکردگی کو بہتر بنانے کی اجازت دیتی ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "یہ کوکیز ہمارے اشتہاری پارٹنرز کے ذریعے ذاتی نوعیت کے اشتہارات فراہم کرنے اور مارکیٹنگ کی مہموں کی تاثیر کی پیمائش کے لیے استعمال کی جاتی ہیں۔ وہ صارف کی دلچسپیوں اور براؤزنگ رویے کی بنیاد پر متعلقہ پروموشنز فراہم کرنے میں مدد کرتے ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "اس زمرے میں ایسی کوکیز شامل ہیں جو پہلے سے طے شدہ زمروں میں فٹ نہیں ہوتی ہیں لیکن ویب سائٹ کی کچھ خصوصیات یا بہتری کے لیے ضروری ہو سکتی ہیں۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "سیکیورٹی کوکیز توثیق، فراڈ کی روک تھام، اور محفوظ براؤزنگ کو فعال کرکے صارف کے ڈیٹا کی حفاظت میں مدد کرتی ہیں۔ وہ اس بات کو یقینی بناتے ہیں کہ حساس معلومات، جیسے لاگ ان کی اسناد، کو خفیہ کردہ کنکشنز پر محفوظ طریقے سے منتقل کیا جاتا ہے۔<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "as": {
      "acceptAll": "সকলো গ্ৰহণ কৰক",
      "accept": "গ্ৰহণ কৰা",
      "decline": "সকলোকে নাকচ কৰক",
      "acceptSelected": "নিৰ্বাচিত গ্ৰহণ কৰক",
      "ok": "সকলোকে গ্ৰহণ কৰক",
      "consentNotice": {
        "description": "আমি আপোনাৰ গোপনীয়তাক সন্মান কৰো আমি কুকীজসমূহ অত্যাৱশ্যকীয় চাইটৰ কাৰ্য্যক্ষমতা সক্ষম কৰিবলৈ সংৰক্ষণ কৰোঁ, লগতে বিপণন, ব্যক্তিগতকৰণ আৰু বিশ্লেষণো৷ “সকলো গ্ৰহণ কৰক” ক্লিক কৰি, আপুনি আমাৰ কুকীজৰ ব্যৱহাৰত সন্মতি দিছে৷ আপুনি যিকোনো সময়তে আপোনাৰ ছেটিংছ সলনি কৰিব পাৰে। কুকি নীতি।",
        "learnMore": "কাষ্টমাইজ কৰক",
        "changeDescription": " "
      },
      "save": "গ্ৰহণ কৰা",
      "consentModal": {
        "title": "সন্মতি পছন্দসমূহ কাষ্টমাইজ কৰক",
        "description": "আমি কুকীজ ব্যৱহাৰ কৰো যাতে আপোনাক পৃষ্ঠাসমূহৰ মাজত দক্ষতাৰে নেভিগেট কৰাত সহায় কৰে, আপোনাৰ পছন্দসমূহ সংৰক্ষণ কৰে, আৰু সাধাৰণতে এটা ৱেবছাইটৰ অভিজ্ঞতা উন্নত কৰে৷ কিন্তু, আমি আপোনাৰ গোপনীয়তাৰ অধিকাৰ স্বীকাৰ কৰোঁ আৰু সেয়েহে আপুনি কিছুমান ধৰণৰ কুকিজৰ অনুমতি নিদিয়াটো বাছি ল&#39;ব পাৰে৷ অধিক জানিবলৈ আৰু আমাৰ অবিকল্পিত ছেটিংছ সলনি কৰিবলৈ বিভিন্ন শ্ৰেণীৰ শিৰোনামত ক্লিক কৰক। অনুগ্ৰহ কৰি মন কৰক যে কিছুমান বিশেষ ধৰণৰ কুকীজ ব্লক কৰিলে আপোনাৰ চাইটটোৰ অভিজ্ঞতাত প্ৰভাৱ পৰিব পাৰে।",
        "buttons": {
          "save": "গ্ৰহণ কৰা",
          "acceptAll": "সকলো গ্ৰহণ কৰক",
          "decline": "সকলোকে নাকচ কৰক"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "সকলোকে নাকচ কৰক",
          "title": "সকলোকে নাকচ কৰক"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "আমি এই কুকীজসমূহ ৱেবছাইটৰ কাৰ্য্যক্ষমতা বৃদ্ধি আৰু ব্যৱহাৰকাৰীৰ অভিজ্ঞতা উন্নত কৰিবলৈ ব্যৱহাৰ কৰো। তথ্যত প্ৰৱেশ তথ্য, অঞ্চল, ভাষা, আৰু উন্নত বিষয়বস্তু অন্তৰ্ভুক্ত হ&#39;ব পাৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "এই কুকীজসমূহে আমাক ৱেবছাইটৰ ট্ৰেফিক, ব্যৱহাৰকাৰীৰ আচৰণ, আৰু নিয়োজিততাৰ আৰ্হি বিশ্লেষণ কৰাত সহায় কৰে৷ সংগ্ৰহ কৰা অন্তৰ্দৃষ্টিসমূহে আমাক বিষয়বস্তু অনুকূল কৰিবলৈ, ব্যৱহাৰযোগ্যতা বৃদ্ধি কৰিবলৈ, আৰু সামগ্ৰিক চাইটৰ পৰিৱেশন উন্নত কৰিবলৈ অনুমতি দিয়ে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "এই কুকীজসমূহ আমাৰ বিজ্ঞাপন অংশীদাৰসকলে ব্যক্তিগতকৃত বিজ্ঞাপন প্ৰদান কৰিবলৈ আৰু বিপণন অভিযানৰ ফলপ্ৰসূতা জুখিবলৈ ব্যৱহাৰ কৰে। ইহঁতে ব্যৱহাৰকাৰীৰ আগ্ৰহ আৰু ব্ৰাউজিং আচৰণৰ ওপৰত ভিত্তি কৰি প্ৰাসংগিক প্ৰচাৰ প্ৰদান কৰাত সহায় কৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "এই শ্ৰেণীত এনে কুকীজ অন্তৰ্ভুক্ত কৰা হৈছে যিবোৰ পূৰ্বনিৰ্ধাৰিত শ্ৰেণীসমূহত খাপ নাখায় কিন্তু কিছুমান ৱেবছাইটৰ কাৰ্য্যকৰীতা বা উন্নতিৰ বাবে প্ৰয়োজনীয় হ&#39;ব পাৰে।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "সুৰক্ষা কুকীজে প্ৰমাণীকৰণ, জালিয়াতি প্ৰতিৰোধ, আৰু সুৰক্ষিত ব্ৰাউজিং সামৰ্থবান কৰি ব্যৱহাৰকাৰীৰ তথ্য সুৰক্ষিত কৰাত সহায় কৰে৷ তেওঁলোকে নিশ্চিত কৰে যে স্পৰ্শকাতৰ তথ্য, যেনে লগইন প্ৰমাণপত্ৰসমূহ, এনক্ৰিপ্ট কৰা সংযোগসমূহৰ জৰিয়তে নিৰাপদে প্ৰেৰণ কৰা হয়।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mai": {
      "acceptAll": "सब स्वीकार करू",
      "accept": "स्वीकार",
      "decline": "सब के अस्वीकार करू",
      "acceptSelected": "स्वीकार करू चयनित",
      "ok": "सब स्वीकार करू",
      "consentNotice": {
        "description": "हम अहां कें गोपनीयता कें सम्मान करय छी हम आवश्यक साइट कार्यक्षमता कें सक्षम करय कें लेल कुकीज़ संग्रहीत करय छी, साथ ही साथ विपणन, व्यक्तिगतकरण आ विश्लेषणात्मकता. “सब स्वीकार करू” पर क्लिक करला सं, अहां हमर कुकीज़ कें उपयोग कें लेल सहमति दयत छी. अहां अपन सेटिंग्स कहियो बदलि सकय छी. कुकी नीति।",
        "learnMore": "अनुकूलित करू",
        "changeDescription": " "
      },
      "save": "स्वीकार",
      "consentModal": {
        "title": "सहमति वरीयता अनुकूलित करू",
        "description": "हम कुकीज़ कें उपयोग अहां कें पन्नाक कें बीच कुशलता सं नेविगेट करय मे मदद करय कें लेल करय छै, अहां कें पसंद कें संग्रहीत करय मे मदद करय छै, आ आम तौर पर कोनों वेबसाइट कें अहां कें अनुभव मे सुधार करय कें लेल. मुदा, हम अहां कें गोपनीयता कें अधिकार कें स्वीकार करय छी आ अइ कारण सं अहां किछ प्रकार कें कुकीज़ कें अनुमति नहि देनाय चुन सकय छी. अधिक जानकारी आरू हमरऽ डिफ़ॉल्ट सेटिंग बदलै लेली अलग-अलग कैटेगरी हेडिंग प॑ क्लिक करऽ । कृपया ध्यान राखब जे किछु खास तरहक कुकीज़ के अवरुद्ध करला सं साइट के अहां के अनुभव प्रभावित भ सकैत अछि.",
        "buttons": {
          "save": "स्वीकार",
          "acceptAll": "सब स्वीकार करू",
          "decline": "सब के अस्वीकार करू"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "सब के अस्वीकार करू",
          "title": "सब के अस्वीकार करू"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "हम ई कुकीज़ के उपयोग वेबसाइट के कार्यक्षमता बढ़ाबै आरू उपयोगकर्ता के अनुभव में सुधार लेली करै छै. जानकारी मे लॉगिन डाटा, क्षेत्र, भाषा, आ बढ़ल सामग्री शामिल भ सकय छै.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ई कुकीज़ हमरा वेबसाइट ट्रैफिक, उपयोगकर्ता व्यवहार, आरू जुड़ाव पैटर्न कें विश्लेषण करय मे मदद करय छै. एकत्रित अंतर्दृष्टि हमरा सामग्री क॑ अनुकूलित करै, उपयोगिता बढ़ाबै, आरू समग्र साइट प्रदर्शन म॑ सुधार करै के अनुमति दै छै ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "इ कुकीज़ कें उपयोग हमर विज्ञापन भागीदारक द्वारा व्यक्तिगत विज्ञापन पहुंचाबय आ विपणन अभियानक कें प्रभावशीलता कें माप कें लेल कैल जायत छै. इ उपयोगकर्ताक कें रुचि आ ब्राउजिंग व्यवहार कें आधार पर प्रासंगिक प्रचार प्रदान करय मे मदद करय छै.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ई श्रेणी म॑ कुकीज़ शामिल छै जे पूर्व परिभाषित श्रेणी म॑ फिट नै होय छै लेकिन कुछ वेबसाइट कार्यक्षमता या सुधार लेली आवश्यक होय सकै छै.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "सुरक्षा कुकीज़ प्रमाणीकरण, धोखाधड़ी रोकथाम आ सुरक्षित ब्राउजिंग कें सक्षम कयर उपयोगकर्ता डेटा कें सुरक्षा मे मदद करएयत छै. ओ इ सुनिश्चित करएयत छै की संवेदनशील जानकारी, जेना लॉगिन क्रेडेंशियल, एन्क्रिप्टेड कनेक्शनक पर सुरक्षित रूप सं संचारित कैल जायत छै.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ms": {
      "acceptAll": "Terima semua",
      "accept": "Terima",
      "decline": "Tolak Semua",
      "acceptSelected": "Terima Dipilih",
      "ok": "Terima Semua",
      "consentNotice": {
        "description": "Kami menghormati privasi anda. Kami menyimpan kuki untuk mendayakan fungsi penting laman web, serta pemasaran, pemperibadian dan analitik. Dengan mengklik “Terima Semua”, anda bersetuju dengan penggunaan kuki kami. Anda boleh menukar tetapan anda pada bila-bila masa. Dasar Kuki.",
        "learnMore": "Sesuaikan",
        "changeDescription": " "
      },
      "save": "Terima",
      "consentModal": {
        "title": "Sesuaikan Keutamaan Persetujuan",
        "description": "Kami menggunakan kuki untuk membantu anda menavigasi antara halaman dengan cekap, menyimpan pilihan anda dan secara amnya meningkatkan pengalaman anda di laman web. Walau bagaimanapun, kami mengakui hak privasi anda dan oleh itu anda boleh memilih untuk tidak membenarkan beberapa jenis kuki. Klik pada tajuk kategori yang berbeza untuk mengetahui lebih lanjut dan menukar tetapan lalai kami. Sila ambil perhatian bahawa menyekat jenis kuki tertentu mungkin menjejaskan pengalaman anda di laman web ini.",
        "buttons": {
          "save": "Terima",
          "acceptAll": "Terima semua",
          "decline": "Tolak Semua"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "Tolak Semua",
          "title": "Tolak Semua"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "Kami menggunakan kuki ini untuk mempertingkatkan fungsi laman web dan menambah baik pengalaman pengguna. Maklumat boleh merangkumi data log masuk, wilayah, bahasa dan kandungan yang dipertingkatkan.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "Kuki ini membantu kami menganalisis trafik laman web, tingkah laku pengguna dan corak penglibatan. Wawasan yang dikumpul membolehkan kami mengoptimumkan kandungan, meningkatkan kebolehgunaan dan meningkatkan prestasi keseluruhan laman web.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "Kuki ini digunakan oleh rakan kongsi pengiklanan kami untuk menyampaikan iklan yang diperibadikan dan mengukur keberkesanan kempen pemasaran. Kuki ini membantu menyediakan promosi yang berkaitan berdasarkan minat pengguna dan tingkah laku melayari.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "Kategori ini termasuk kuki yang tidak termasuk dalam kategori yang telah ditetapkan tetapi mungkin diperlukan untuk fungsi atau penambahbaikan laman web tertentu.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "Kuki keselamatan membantu melindungi data pengguna dengan mendayakan pengesahan, pencegahan penipuan dan pelayaran selamat. Ia memastikan maklumat sensitif, seperti kelayakan log masuk, dihantar dengan selamat melalui sambungan yang disulitkan.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "mni-mtei": {
      "acceptAll": "ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯥ꯫",
      "accept": "ꯌꯥꯕ",
      "decline": "ꯄꯨꯝꯅꯃꯛ ꯔꯤꯖꯦꯛꯇ ꯇꯧꯕꯥ꯫",
      "acceptSelected": "ꯑꯦꯛꯁꯦꯞꯇ ꯇꯧꯕꯥ ꯌꯥꯕꯥ꯫",
      "ok": "ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯥ꯫",
      "consentNotice": {
        "description": "ꯑꯩꯈꯣꯌꯅꯥ ꯑꯗꯣꯃꯒꯤ ꯄ꯭ꯔꯥꯏꯕꯦꯁꯤꯕꯨ ꯏꯀꯥꯌ ꯈꯨꯝꯅꯩ ꯑꯩꯈꯣꯌꯅꯥ ꯇꯉꯥꯏ ꯐꯗꯕꯥ ꯁꯥꯏꯠ ꯐꯉ꯭ꯀꯁꯅꯦꯂꯤꯇꯤ, ꯂꯣꯌꯅꯅꯥ ꯃꯥꯔꯀꯦꯇꯤꯡ, ꯄꯔꯁꯣꯅꯦꯂꯥꯏꯖꯦꯁꯟ ꯑꯃꯁꯨꯡ ꯑꯦꯅꯥꯂꯥꯏꯇꯤꯛꯁ ꯏꯅꯦꯕꯜ ꯇꯧꯅꯕꯥ ꯀꯨꯀꯤꯖ ꯁ꯭ꯇꯣꯔ ꯇꯧꯏ꯫ “ꯄꯨꯝꯅꯃꯛ ꯌꯥꯔꯦ” ꯍꯥꯌꯕꯁꯤꯗꯥ ꯀ꯭ꯂꯤꯛ ꯇꯧꯔꯒꯥ, ꯅꯍꯥꯛꯅꯥ ꯑꯩꯈꯣꯌꯒꯤ ꯀꯨꯀꯤꯖ ꯁꯤꯖꯤꯟꯅꯕꯗꯥ ꯑꯌꯥꯕꯥ ꯄꯤꯔꯦ꯫ ꯅꯍꯥꯛꯅꯥ ꯃꯇꯝ ꯑꯃꯠꯇꯗꯥ ꯅꯍꯥꯛꯀꯤ ꯁꯦꯇꯤꯡꯁꯤꯡ ꯍꯣꯡꯗꯣꯀꯄꯥ ꯌꯥꯏ꯫ ꯀꯨꯀꯤ ꯄꯣꯂꯤꯁꯤ꯫",
        "learnMore": "ꯀꯁ꯭ꯇꯃꯁ ꯇꯧꯕꯥ꯫",
        "changeDescription": " "
      },
      "save": "ꯌꯥꯕ",
      "consentModal": {
        "title": "ꯑꯌꯥꯕꯥ ꯄꯤꯕꯥ ꯄꯁꯟꯗꯁꯤꯡ ꯀꯁ꯭ꯇꯃꯁ ꯇꯧꯕꯥ꯫",
        "description": "ꯑꯩꯈꯣꯌꯅꯥ ꯀꯨꯀꯤꯖ ꯑꯁꯤ ꯑꯗꯣꯃꯕꯨ ꯄꯦꯖꯁꯤꯡꯒꯤ ꯃꯔꯛꯇꯥ ꯏꯐꯤꯁꯤꯌꯦꯟꯇ ꯑꯣꯏꯅꯥ ꯆꯠꯄꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯅꯕꯥ, ꯑꯗꯣꯃꯒꯤ ꯄꯁꯟꯗꯁꯤꯡ ꯊꯝꯅꯕꯥ ꯑꯃꯁꯨꯡ ꯃꯍꯧꯁꯥꯅꯥ ꯋꯦꯕꯁꯥꯏꯠ ꯑꯃꯒꯤ ꯑꯦꯛꯁꯄꯔꯤꯌꯦꯟꯁ ꯐꯒꯠꯍꯅꯕꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯏ꯫ ꯑꯗꯨꯝ ꯑꯣꯏꯅꯃꯛ, ꯑꯩꯈꯣꯌꯅꯥ ꯅꯍꯥꯛꯀꯤ ꯄ꯭ꯔꯥꯏꯚꯦꯁꯤꯒꯤ ꯍꯛ ꯑꯗꯨ ꯌꯥꯔꯦ ꯑꯃꯁꯨꯡ ꯃꯔꯝ ꯑꯁꯤꯅꯥ ꯅꯍꯥꯛꯅꯥ ꯀꯨꯀꯤꯖ ꯃꯈꯜ ꯈꯔꯗꯤ ꯑꯌꯥꯕꯥ ꯄꯤꯗꯅꯕꯥ ꯈꯅꯕꯥ ꯌꯥꯏ꯫ ꯍꯦꯟꯅꯥ ꯈꯪꯅꯕꯒꯤꯗꯃꯛ ꯑꯃꯁꯨꯡ ꯑꯩꯈꯣꯌꯒꯤ ꯗꯤꯐꯣꯜꯇ ꯁꯦꯇꯤꯡꯁꯤꯡ ꯍꯣꯡꯗꯣꯛꯅꯕꯥ ꯇꯣꯉꯥꯟ-ꯇꯣꯉꯥꯅꯕꯥ ꯀꯦꯇꯦꯒꯣꯔꯤꯒꯤ ꯍꯦꯗꯤꯡꯁꯤꯡꯗꯥ ꯀ꯭ꯂꯤꯛ ꯇꯧꯕꯤꯌꯨ꯫ ꯆꯥꯅꯕꯤꯗꯨꯅꯥ ꯈꯪꯖꯤꯅꯕꯤꯌꯨ ꯃꯗꯨꯗꯤ ꯑꯀꯛꯅꯕꯥ ꯃꯈꯂꯒꯤ ꯀꯨꯀꯤꯖ ꯕ꯭ꯂꯣꯛ ꯇꯧꯕꯅꯥ ꯅꯍꯥꯛꯀꯤ ꯁꯥꯏꯠ ꯑꯗꯨꯒꯤ ꯑꯦꯛꯁꯄꯔꯤꯌꯦꯟꯁꯇꯥ ꯑꯀꯥꯌꯕꯥ ꯄꯤꯕꯥ ꯌꯥꯏ꯫",
        "buttons": {
          "save": "ꯌꯥꯕ",
          "acceptAll": "ꯄꯨꯝꯅꯃꯛ ꯌꯥꯕꯥ꯫",
          "decline": "ꯄꯨꯝꯅꯃꯛ ꯔꯤꯖꯦꯛꯇ ꯇꯧꯕꯥ꯫"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ꯄꯨꯝꯅꯃꯛ ꯔꯤꯖꯦꯛꯇ ꯇꯧꯕꯥ꯫",
          "title": "ꯄꯨꯝꯅꯃꯛ ꯔꯤꯖꯦꯛꯇ ꯇꯧꯕꯥ꯫"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "ꯑꯩꯈꯣꯌꯅꯥ ꯀꯨꯀꯤꯖꯁꯤꯡ ꯑꯁꯤ ꯋꯦꯕꯁꯥꯏꯠꯀꯤ ꯐꯉ꯭ꯀꯁꯅꯦꯂꯤꯇꯤ ꯍꯦꯅꯒꯠꯍꯟꯅꯕꯥ ꯑꯃꯁꯨꯡ ꯌꯨꯖꯔ ꯑꯦꯛꯁꯄꯤꯔꯤꯑꯦꯟꯁ ꯐꯒꯠꯍꯟꯅꯕꯥ ꯁꯤꯖꯤꯟꯅꯩ꯫ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ ꯑꯗꯨꯗꯥ ꯂꯣꯒꯏꯟ ꯗꯦꯇꯥ, ꯔꯤꯖꯟ, ꯂꯣꯜ, ꯑꯃꯁꯨꯡ ꯍꯦꯟꯅꯥ ꯐꯕꯥ ꯀꯟꯇꯦꯟꯇꯁꯤꯡ ꯌꯥꯎꯕꯥ ꯌꯥꯏ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ꯀꯨꯀꯤꯖꯁꯤꯡ ꯑꯁꯤꯅꯥ ꯑꯩꯈꯣꯌꯗꯥ ꯋꯦꯕꯁꯥꯏꯠꯀꯤ ꯇ꯭ꯔꯥꯐꯤꯛ, ꯌꯨꯖꯔꯒꯤ ꯂꯃꯆꯠ-ꯁꯥꯖꯠ, ꯑꯃꯁꯨꯡ ꯑꯦꯉ꯭ꯒꯦꯖꯃꯦꯟꯇ ꯄꯦꯇꯔꯅꯁꯤꯡ ꯑꯦꯅꯥꯂꯥꯏꯖ ꯇꯧꯕꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯏ꯫ ꯈꯣꯃꯖꯤꯜꯂꯀꯄꯥ ꯋꯥꯈꯜꯂꯣꯅꯁꯤꯡ ꯑꯁꯤꯅꯥ ꯑꯩꯈꯣꯌꯗꯥ ꯀꯟꯇꯦꯟꯇ ꯑꯣꯞꯇꯤꯃꯥꯏꯖ ꯇꯧꯕꯥ, ꯌꯨꯖꯕꯦꯂꯤꯇꯤ ꯍꯦꯅꯒꯠꯍꯅꯕꯥ ꯑꯃꯁꯨꯡ ꯑꯄꯨꯅꯕꯥ ꯁꯥꯏꯠꯀꯤ ꯄꯔꯐꯣꯃꯦꯟꯁ ꯐꯒꯠꯍꯅꯕꯥ ꯉꯃꯍꯜꯂꯤ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ꯀꯨꯀꯤꯖꯁꯤꯡ ꯑꯁꯤ ꯑꯩꯈꯣꯌꯒꯤ ꯑꯦꯗꯚꯥꯔꯇꯥꯏꯖꯃꯦꯟꯇ ꯄꯥꯔꯇꯅꯔꯁꯤꯡꯅꯥ ꯄꯔꯁꯣꯅꯦꯂꯥꯏꯖ ꯇꯧꯔꯕꯥ ꯑꯦꯗꯁꯤꯡ ꯄꯤꯅꯕꯥ ꯑꯃꯁꯨꯡ ꯃꯥꯔꯀꯦꯇꯤꯡ ꯀꯦꯝꯄꯦꯅꯁꯤꯡꯒꯤ ꯏꯐꯦꯛꯇꯤꯕꯅꯦꯁ ꯑꯗꯨ ꯌꯦꯡꯁꯤꯟꯅꯕꯥ ꯁꯤꯖꯤꯟꯅꯩ꯫ ꯃꯈꯣꯌꯅꯥ ꯌꯨꯖꯔꯒꯤ ꯏꯟꯇꯔꯦꯁ꯭ꯠ ꯑꯃꯁꯨꯡ ꯕ꯭ꯔꯥꯎꯖꯤꯡ ꯕꯤꯍꯦꯕꯤꯌꯔꯗꯥ ꯌꯨꯝꯐꯝ ꯑꯣꯏꯕꯥ ꯃꯔꯤ ꯂꯩꯅꯕꯥ ꯄ꯭ꯔꯣꯃꯣꯁꯅꯁꯤꯡ ꯄꯤꯕꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯏ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ꯀꯦꯇꯦꯒꯣꯔꯤ ꯑꯁꯤꯗꯥ ꯃꯃꯥꯡꯗꯥ ꯁꯦꯃꯗꯣꯛ-ꯁꯦꯃꯖꯤꯟ ꯇꯧꯔꯕꯥ ꯀꯦꯇꯦꯒꯣꯔꯤꯁꯤꯡꯗꯥ ꯌꯥꯎꯗꯕꯥ ꯑꯗꯨꯕꯨ ꯑꯀꯛꯅꯕꯥ ꯋꯦꯕꯁꯥꯏꯇꯀꯤ ꯐꯉ꯭ꯀꯁꯅꯦꯂꯤꯇꯤꯁꯤꯡ ꯅꯠꯠꯔꯒꯥ ꯑꯍꯣꯡꯕꯥ ꯄꯨꯔꯛꯅꯕꯒꯤꯗꯃꯛ ꯃꯊꯧ ꯇꯥꯕꯥ ꯀꯨꯀꯤꯖꯁꯤꯡ ꯌꯥꯎꯏ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ꯁꯦꯛꯌꯨꯔꯤꯇꯤ ꯀꯨꯀꯤꯖꯁꯤꯡꯅꯥ ꯑꯣꯊꯦꯟꯇꯤꯀꯦꯁꯟ, ꯐ꯭ꯔꯣꯗ ꯄ꯭ꯔꯤꯚꯦꯟꯁꯟ, ꯑꯃꯁꯨꯡ ꯁꯦꯛꯌꯨꯑꯣꯔ ꯑꯣꯏꯕꯥ ꯕ꯭ꯔꯥꯎꯖꯤꯡ ꯏꯅꯦꯕꯜ ꯇꯧꯗꯨꯅꯥ ꯌꯨꯖꯔ ꯗꯦꯇꯥ ꯉꯥꯀꯊꯣꯀꯄꯗꯥ ꯃꯇꯦꯡ ꯄꯥꯡꯏ꯫ ꯃꯈꯣꯌꯅꯥ ꯂꯣꯒꯏꯟ ꯀ꯭ꯔꯦꯗꯦꯟꯁꯤꯑꯦꯂꯁꯤꯡꯒꯨꯝꯕꯥ ꯁꯦꯟꯁꯤꯇꯤꯚ ꯏꯅꯐꯣꯔꯃꯦꯁꯟ ꯑꯗꯨ ꯑꯦꯅꯛꯔꯤꯞꯇ ꯇꯧꯔꯕꯥ ꯀꯅꯦꯛꯁꯅꯁꯤꯡꯒꯤ ꯈꯨꯠꯊꯥꯡꯗꯥ ꯁꯥꯐꯅꯥ ꯇ꯭ꯔꯥꯟꯁꯃꯤꯠ ꯇꯧꯕꯥ ꯁꯣꯌꯗꯅꯥ ꯇꯧꯏ꯫<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "or": {
      "acceptAll": "ସବୁ ସ୍ୱୀକାର କରନ୍ତୁ",
      "accept": "ଗ୍ରହଣ କରନ୍ତୁ",
      "decline": "ସମସ୍ତଙ୍କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ",
      "acceptSelected": "ଚୟନିତକୁ ଗ୍ରହଣ କରନ୍ତୁ",
      "ok": "ସବୁ ଗ୍ରହଣ କରନ୍ତୁ",
      "consentNotice": {
        "description": "ଆମେ ଆପଣଙ୍କର ଗୋପନୀୟତାକୁ ସମ୍ମାନ କରୁ | ଆମେ ଜରୁରୀ ସାଇଟ୍ କାର୍ଯ୍ୟକ୍ଷମତା, ମାର୍କେଟିଂ, ବ୍ୟକ୍ତିଗତକରଣ ଏବଂ ବିଶ୍ଳେଷଣକୁ ସକ୍ଷମ କରିବା ପାଇଁ କୁକିଜ୍ ସଂରକ୍ଷଣ କରୁ | &quot;ସମସ୍ତକୁ ଗ୍ରହଣ କରନ୍ତୁ&quot; କ୍ଲିକ୍ କରି, ଆପଣ ଆମର କୁକିଜ୍ ବ୍ୟବହାର ପାଇଁ ସମ୍ମତି ଦେଉଛନ୍ତି | ଆପଣ ଯେକୌଣସି ସମୟରେ ଆପଣଙ୍କର ସେଟିଂସ୍ ପରିବର୍ତ୍ତନ କରିପାରିବେ | କୁକି ନୀତି |",
        "learnMore": "କଷ୍ଟମାଇଜ୍‌ କରନ୍ତୁ",
        "changeDescription": " "
      },
      "save": "ଗ୍ରହଣ କରନ୍ତୁ",
      "consentModal": {
        "title": "ସମ୍ମତି ପସନ୍ଦଗୁଡ଼ିକୁ କଷ୍ଟମାଇଜ୍ କରନ୍ତୁ",
        "description": "ଆମେ ଆପଣଙ୍କୁ ପୃଷ୍ଠାଗୁଡ଼ିକ ମଧ୍ୟରେ ଦକ୍ଷତାର ସହ ନେଭିଗେଟ୍ କରିବା, ଆପଣଙ୍କର ପସନ୍ଦଗୁଡ଼ିକୁ ସଂରକ୍ଷଣ କରିବା ଏବଂ ସାଧାରଣତଃ ଏକ ୱେବସାଇଟ୍ ବିଷୟରେ ଆପଣଙ୍କର ଅଭିଜ୍ଞତାକୁ ଉନ୍ନତ କରିବାରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ କୁକିଜ୍ ବ୍ୟବହାର କରୁ। ତଥାପି, ଆମେ ଆପଣଙ୍କର ଗୋପନୀୟତାର ଅଧିକାରକୁ ସ୍ୱୀକାର କରୁଛୁ ଏବଂ ତେଣୁ ଆପଣ କିଛି ପ୍ରକାରର କୁକିଜ୍ ଅନୁମତି ନଦେବାକୁ ବାଛିପାରିବେ। ଅଧିକ ଜାଣିବା ପାଇଁ ଏବଂ ଆମର ଡିଫଲ୍ଟ ସେଟିଂସ୍ ପରିବର୍ତ୍ତନ କରିବା ପାଇଁ ବିଭିନ୍ନ ବର୍ଗ ଶୀର୍ଷକ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ। ଦୟାକରି ଧ୍ୟାନ ଦିଅନ୍ତୁ ଯେ କିଛି ପ୍ରକାରର କୁକିଜ୍ ଅବରୋଧ କରିବା ଦ୍ଵାରା ସାଇଟ୍ ବିଷୟରେ ଆପଣଙ୍କର ଅଭିଜ୍ଞତା ପ୍ରଭାବିତ ହୋଇପାରେ।",
        "buttons": {
          "save": "ଗ୍ରହଣ କରନ୍ତୁ",
          "acceptAll": "ସବୁ ସ୍ୱୀକାର କରନ୍ତୁ",
          "decline": "ସମସ୍ତଙ୍କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "ସମସ୍ତଙ୍କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ",
          "title": "ସମସ୍ତଙ୍କୁ ପ୍ରତ୍ୟାଖ୍ୟାନ କରନ୍ତୁ"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "ଆମେ ୱେବସାଇଟ୍ କାର୍ଯ୍ୟକ୍ଷମତା ବୃଦ୍ଧି କରିବା ଏବଂ ଉପଭୋକ୍ତା ଅଭିଜ୍ଞତାକୁ ଉନ୍ନତ କରିବା ପାଇଁ ଏହି କୁକିଜ୍ ବ୍ୟବହାର କରୁ। ସୂଚନାରେ ଲଗଇନ୍ ତଥ୍ୟ, ଅଞ୍ଚଳ, ଭାଷା ଏବଂ ଉନ୍ନତ ବିଷୟବସ୍ତୁ ଅନ୍ତର୍ଭୁକ୍ତ ହୋଇପାରେ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "ଏହି କୁକିଜ୍ ଆମକୁ ୱେବସାଇଟ୍ ଟ୍ରାଫିକ୍, ଉପଭୋକ୍ତା ଆଚରଣ ଏବଂ ଏନଗେଜମେଣ୍ଟ ପ୍ୟାଟର୍ନ ବିଶ୍ଳେଷଣ କରିବାରେ ସାହାଯ୍ୟ କରେ। ସଂଗୃହୀତ ଅନ୍ତର୍ଦୃଷ୍ଟି ଆମକୁ ବିଷୟବସ୍ତୁକୁ ଅପ୍ଟିମାଇଜ୍ କରିବାକୁ, ବ୍ୟବହାରଯୋଗ୍ୟତା ବୃଦ୍ଧି କରିବାକୁ ଏବଂ ସାମଗ୍ରିକ ସାଇଟ୍ କାର୍ଯ୍ୟଦକ୍ଷତାକୁ ଉନ୍ନତ କରିବାକୁ ଅନୁମତି ଦିଏ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "ଏହି କୁକିଜ୍ ଆମର ବିଜ୍ଞାପନ ଅଂଶୀଦାରମାନଙ୍କ ଦ୍ୱାରା ବ୍ୟକ୍ତିଗତ ବିଜ୍ଞାପନ ପ୍ରଦାନ କରିବା ଏବଂ ମାର୍କେଟିଂ ଅଭିଯାନର ପ୍ରଭାବ ମାପିବା ପାଇଁ ବ୍ୟବହାର କରାଯାଏ। ଏଗୁଡ଼ିକ ଉପଭୋକ୍ତା ଆଗ୍ରହ ଏବଂ ବ୍ରାଉଜିଂ ଆଚରଣ ଉପରେ ଆଧାରିତ ପ୍ରାସଙ୍ଗିକ ପ୍ରଚାର ପ୍ରଦାନ କରିବାରେ ସାହାଯ୍ୟ କରନ୍ତି।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "ଏହି ବର୍ଗରେ ଏପରି କୁକିଜ୍ ଅନ୍ତର୍ଭୁକ୍ତ ଯାହା ପୂର୍ବନିର୍ଦ୍ଧାରିତ ବର୍ଗରେ ଫିଟ୍ ହୁଏ ନାହିଁ କିନ୍ତୁ କିଛି ୱେବସାଇଟ୍ କାର୍ଯ୍ୟକାରିତା କିମ୍ବା ଉନ୍ନତି ପାଇଁ ଆବଶ୍ୟକ ହୋଇପାରେ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "ସୁରକ୍ଷା କୁକିଜ୍ ପ୍ରମାଣୀକରଣ, ଠକେଇ ପ୍ରତିରୋଧ ଏବଂ ସୁରକ୍ଷିତ ବ୍ରାଉଜିଂକୁ ସକ୍ଷମ କରି ଉପଭୋକ୍ତା ତଥ୍ୟକୁ ସୁରକ୍ଷା ଦେବାରେ ସାହାଯ୍ୟ କରେ। ସେମାନେ ନିଶ୍ଚିତ କରନ୍ତି ଯେ ଲଗଇନ୍ କ୍ରେଡେନସିଆଲ୍ ଭଳି ସମ୍ବେଦନଶୀଳ ସୂଚନା ଏନକ୍ରିପ୍ଟେଡ୍ ସଂଯୋଗ ମାଧ୍ୟମରେ ସୁରକ୍ଷିତ ଭାବରେ ପ୍ରସାରିତ ହୁଏ।<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    },
    "ta": {
      "acceptAll": "அனைத்தையும் ஏற்கவும்",
      "accept": "ஏற்றுக்கொள்",
      "decline": "அனைத்தையும் நிராகரிக்கவும்",
      "acceptSelected": "தேர்ந்தெடுக்கப்பட்டதை ஏற்கவும்",
      "ok": "அனைத்தையும் ஏற்கவும்",
      "consentNotice": {
        "description": "உங்கள் தனியுரிமையை நாங்கள் மதிக்கிறோம். தளத்தின் அத்தியாவசிய செயல்பாடுகளை இயக்குவதற்கும், சந்தைப்படுத்தல், தனிப்பயனாக்கம் மற்றும் பகுப்பாய்வுகளுக்கும் நாங்கள் குக்கீகளைச் சேமிக்கிறோம். “அனைத்தையும் ஏற்கவும்” என்பதைக் கிளிக் செய்வதன் மூலம், எங்கள் குக்கீகளின் பயன்பாட்டிற்கு நீங்கள் ஒப்புதல் அளிக்கிறீர்கள். உங்கள் அமைப்புகளை நீங்கள் எப்போது வேண்டுமானாலும் மாற்றிக்கொள்ளலாம். குக்கீ கொள்கை.",
        "learnMore": "தனிப்பயனாக்கு",
        "changeDescription": " "
      },
      "save": "ஏற்றுக்கொள்",
      "consentModal": {
        "title": "ஒப்புதல் விருப்பங்களைத் தனிப்பயனாக்குங்கள்",
        "description": "பக்கங்களுக்கு இடையே திறமையாக உலாவவும், உங்கள் விருப்பங்களைச் சேமிக்கவும், பொதுவாக ஒரு வலைத்தளத்தில் உங்கள் அனுபவத்தை மேம்படுத்தவும் நாங்கள் குக்கீகளைப் பயன்படுத்துகிறோம். இருப்பினும், உங்கள் தனியுரிமைக்கான உரிமையை நாங்கள் மதிக்கிறோம், எனவே சில வகையான குக்கீகளை அனுமதிக்காமல் இருக்க நீங்கள் தேர்வு செய்யலாம். மேலும் அறியவும் எங்கள் இயல்புநிலை அமைப்புகளை மாற்றவும் வெவ்வேறு வகை தலைப்புகளில் கிளிக் செய்யவும். சில வகையான குக்கீகளைத் தடுப்பது தளத்தில் உங்கள் அனுபவத்தைப் பாதிக்கக்கூடும் என்பதை நினைவில் கொள்ளவும்.",
        "buttons": {
          "save": "ஏற்றுக்கொள்",
          "acceptAll": "அனைத்தையும் ஏற்கவும்",
          "decline": "அனைத்தையும் நிராகரிக்கவும்"
        }
      },
      "poweredBy": "Powered by Seqrite",
      "purposes": {},
      "service": {
        "disableAll": {
          "description": "அனைத்தையும் நிராகரிக்கவும்",
          "title": "அனைத்தையும் நிராகரிக்கவும்"
        },
        "optOut": {
          "description": "Opt Out",
          "title": "Opt Out"
        }
      },
      "purposeItem": {
        "service": "Cookie",
        "services": "Cookies"
      },
      "contextualConsent": {
        "description": "To show this content, we need your consent. Please accept the relevant cookies.",
        "acceptOnce": "Accept once",
        "acceptAlways": "Accept always"
      },
      "functional": {
        "title": "Functional",
        "description": "வலைத்தளத்தின் செயல்பாட்டை மேம்படுத்தவும், பயனர் அனுபவத்தை செம்மைப்படுத்தவும் இந்தக் குக்கீகளை நாங்கள் பயன்படுத்துகிறோம். இதில் உள்நுழைவுத் தரவு, பிராந்தியம், மொழி மற்றும் மேம்படுத்தப்பட்ட உள்ளடக்கம் போன்ற தகவல்கள் அடங்கும்.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>"
      },
      "analytics": {
        "title": "Analytics",
        "description": "இந்தக் குக்கீகள் இணையதளப் போக்குவரத்து, பயனர் நடத்தை மற்றும் ஈடுபாட்டு முறைகளைப் பகுப்பாய்வு செய்ய எங்களுக்கு உதவுகின்றன. இதன் மூலம் சேகரிக்கப்படும் தகவல்கள், உள்ளடக்கத்தை மேம்படுத்தவும், பயன்பாட்டுத்தன்மையை அதிகரிக்கவும், தளத்தின் ஒட்டுமொத்த செயல்திறனை மேம்படுத்தவும் எங்களுக்கு உதவுகின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>"
      },
      "marketing": {
        "title": "Marketing",
        "description": "தனிப்பயனாக்கப்பட்ட விளம்பரங்களை வழங்கவும், சந்தைப்படுத்தல் பிரச்சாரங்களின் செயல்திறனை அளவிடவும் எங்கள் விளம்பரக் கூட்டாளர்களால் இந்தக் குக்கீகள் பயன்படுத்தப்படுகின்றன. பயனரின் ஆர்வங்கள் மற்றும் உலாவல் நடத்தை ஆகியவற்றின் அடிப்படையில் பொருத்தமான விளம்பரங்களை வழங்க அவை உதவுகின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>"
      },
      "others": {
        "title": "Others",
        "description": "இந்த வகை, முன்னரே வரையறுக்கப்பட்ட வகைகளில் பொருந்தாத, ஆனால் இணையதளத்தின் சில செயல்பாடுகள் அல்லது மேம்பாடுகளுக்குத் தேவைப்படக்கூடிய குக்கீகளை உள்ளடக்கியது.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      },
      "security": {
        "title": "Security",
        "description": "பாதுகாப்புக் குக்கீகள், அங்கீகாரம், மோசடித் தடுப்பு மற்றும் பாதுகாப்பான உலாவல் ஆகியவற்றைச் செயல்படுத்துவதன் மூலம் பயனர் தரவைப் பாதுகாக்க உதவுகின்றன. உள்நுழைவுச் சான்றுகள் போன்ற முக்கியமான தகவல்கள், மறைகுறியாக்கப்பட்ட இணைப்புகள் வழியாகப் பாதுகாப்பாக அனுப்பப்படுவதை அவை உறுதி செய்கின்றன.<details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>"
      }
    }
  },
  "styling": {
    "theme": [
      "light",
      "custom"
    ]
  },
  "htmlTexts": true,
  "embedded": false,
  "declarative": false,
  "groupByPurpose": false,
  "hideToggleAll": false,
  "appName": "Auto1",
  "description": "We respects your privacy and is committed to protecting your personal data.",
  "companyName": "Auto1",
  "companyAddress": " ",
  "services": [
    {
      "name": "functional",
      "title": "Functional",
      "description": "<p>We use these cookies to enhance website functionality and improve user experience. Information can include login data, region, language, and enhanced content.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">4 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;PHPSESSID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;JSESSIONID</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;test_cookie</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;device_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Functional Cookies</div></div></div></details>",
      "purposes": [],
      "required": true,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "PHPSESSID",
        "JSESSIONID",
        "test_cookie",
        "device_id"
      ]
    },
    {
      "name": "analytics",
      "title": "Analytics",
      "description": "<p>These cookies help us analyze website traffic, user behavior, and engagement patterns. The insights gathered allow us to optimize content, enhance usability, and improve overall site performance.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">3 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_ga</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gid</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_gat</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Google Analytics</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_ga",
        "_gid",
        "_gat"
      ]
    },
    {
      "name": "marketing",
      "title": "Marketing",
      "description": "<p>These cookies are used by our advertising partners to deliver personalized ads and measure the effectiveness of marketing campaigns. They help provide relevant promotions based on user interests and browsing behavior.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">5 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;_fbp</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Facebook/Meta Pixel</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;IDE</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;fr</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;visitor_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;auth_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Marketing Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "_fbp",
        "IDE",
        "fr",
        "visitor_id",
        "auth_token"
      ]
    },
    {
      "name": "others",
      "title": "Others",
      "description": "<p>This category includes cookies that do not fit into the predefined categories but may be necessary for certain website functionalities or improvements.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">17 Cookies</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;cookie_consent</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;session_id</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ads_campaign</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;analytics_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;language</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;timezone</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;currency</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;theme</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;chat_widget</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;csrf_token</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_login</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;secure_session</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recent_view</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;recommended_items</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;user_preferences</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;preferred_category</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;ui_layout</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "cookie_consent",
        "session_id",
        "ads_campaign",
        "analytics_session",
        "language",
        "timezone",
        "currency",
        "theme",
        "chat_widget",
        "csrf_token",
        "secure_login",
        "secure_session",
        "recent_view",
        "recommended_items",
        "user_preferences",
        "preferred_category",
        "ui_layout"
      ]
    },
    {
      "name": "security",
      "title": "Security",
      "description": "<p>Security cookies help protect user data by enabling authentication, fraud prevention, and secure browsing. They ensure that sensitive information, such as login credentials, is transmitted safely over encrypted connections.</p><details style=\"margin-top:10px\"><summary style=\"cursor:pointer;font-weight:600;padding:2px 0\">1 Cookie</summary><div style=\"margin-top:6px;max-height:150px;overflow-y:auto\"><div style=\"padding:5px 0;border-bottom:1px solid rgba(0,0,0,0.07);font-size:12px;line-height:1.8\"><div><b>Name:</b>&nbsp;XSRF-TOKEN</div><div><b>Host:</b>&nbsp;testcookieconsent.rutuja-nalage.workers.dev</div><div><b>Service:</b>&nbsp;Other Cookies</div></div></div></details>",
      "purposes": [],
      "required": false,
      "default": true,
      "optOut": false,
      "onlyOnce": true,
      "cookies": [
        "XSRF-TOKEN"
      ]
    }
  ]
};
showCookie();