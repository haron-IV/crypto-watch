import { imageList, mapToAttachments } from './imageList'

interface CryptoAlertTemplateBaseProps {
  title: string
  subTitle: string
  subTitleText: string
  footerText: string
  projectLink: string
  projectLinkText: string
  siteLink: string
  siteLinkText: string
  cryptocurrencyName: string
  price: number
}

const currentYear = new Date().getFullYear()

export const cryptoAlertTemplateBase = ({
  title,
  subTitle,
  subTitleText,
  footerText,
  projectLink,
  projectLinkText,
  siteLink,
  siteLinkText,
  cryptocurrencyName,
  price,
}: CryptoAlertTemplateBaseProps) => ({
  attachments: mapToAttachments(imageList),
  html: `<!DOCTYPE html>
    <html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:PixelsPerInch>96</o:PixelsPerInch
              ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oswald"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          @media (max-width: 660px) {
            .icons-inner {
              text-align: center;
            }
    
            .icons-inner td {
              margin: 0 auto;
            }
    
            .row-content {
              width: 100% !important;
            }
    
            .image_block img.big {
              width: auto !important;
            }
    
            .column .border {
              display: none;
            }
    
            table {
              table-layout: fixed !important;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
          }
        </style>
      </head>
      <body
        style="
          margin: 0;
          background-color: #ffffff;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #ffffff;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 640px;
                          "
                          width="640"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="width: 100%; text-align: center">
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #000000;
                                          font-size: 32px;
                                          font-family: Roboto, Tahoma, Verdana,
                                            Segoe, sans-serif;
                                          line-height: 120%;
                                          text-align: center;
                                          direction: ltr;
                                          font-weight: 700;
                                          letter-spacing: normal;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        <span class="tinyMce-placeholder"
                                          >${title}</span
                                        >
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-2"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 640px;
                          "
                          width="640"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  padding-top: 40px;
                                  padding-bottom: 10px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div align="center" style="line-height: 10px">
                                        <img
                                          alt="Cryptocurrency analytics"
                                          class="big"
                                          src="cid:${imageList.main.cid}"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 600px;
                                            max-width: 100%;
                                          "
                                          title="Cryptocurrency analytics"
                                          width="600"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-3"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 640px;
                          "
                          width="640"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 30px;
                                  padding-bottom: 20px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="heading_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="text-align: center; width: 100%">
                                      <h1
                                        style="
                                          margin: 0;
                                          color: #000000;
                                          direction: ltr;
                                          font-family: 'Oswald', Arial,
                                            'Helvetica Neue', Helvetica, sans-serif;
                                          font-size: 34px;
                                          font-weight: normal;
                                          letter-spacing: normal;
                                          line-height: 120%;
                                          text-align: center;
                                          margin-top: 0;
                                          margin-bottom: 0;
                                        "
                                      >
                                        ${subTitle}
                                      </h1>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="10"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td>
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 14px;
                                            mso-line-height-alt: 21px;
                                            color: #393d47;
                                            line-height: 1.5;
                                            font-family: Roboto, Tahoma, Verdana,
                                              Segoe, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <span style="font-size: 16px"
                                              >${subTitleText}</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-4"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #f4f4f4;
                            color: #000000;
                            width: 640px;
                          "
                          width="640"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="33.333333333333336%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="icons_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        vertical-align: middle;
                                        color: #000000;
                                        font-family: 'Oswald', Arial,
                                          'Helvetica Neue', Helvetica, sans-serif;
                                        font-size: 26px;
                                        text-align: left;
                                        padding-top: 15px;
                                        padding-bottom: 15px;
                                      "
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            style="
                                              vertical-align: middle;
                                              text-align: left;
                                            "
                                          >
                                            <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                            <!--[if !vml]><!-->
                                            <table
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="icons-inner"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                display: inline-block;
                                                margin-right: -4px;
                                                padding-left: 0px;
                                                padding-right: 0px;
                                              "
                                            >
                                              <!--<![endif]-->
                                              <tr>
                                                <td
                                                  style="
                                                    vertical-align: middle;
                                                    text-align: center;
                                                    padding-top: 5px;
                                                    padding-bottom: 5px;
                                                    padding-left: 5px;
                                                    padding-right: 15px;
                                                  "
                                                >
                                                  <img
                                                    align="center"
                                                    alt=""
                                                    class="icon"
                                                    height="64"
                                                    src="cid:${imageList.bitcoin.cid}"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      margin: 0 auto;
                                                      border: 0;
                                                    "
                                                    width="64"
                                                  />
                                                </td>
                                                <td
                                                  style="
                                                    font-family: 'Oswald', Arial,
                                                      'Helvetica Neue', Helvetica,
                                                      sans-serif;
                                                      margin-bottom: 4px;
                                                    font-size: 26px;
                                                    color: #000000;
                                                    vertical-align: middle;
                                                    letter-spacing: undefined;
                                                    text-align: left;
                                                  "
                                                >
                                                  ${cryptocurrencyName}
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="column column-2"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="33.333333333333336%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-left: 10px;
                                        padding-top: 30px;
                                        padding-bottom: 15px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            padding-top: 4px;
                                            font-size: 12px;
                                            font-family: Roboto, Tahoma, Verdana,
                                              Segoe, sans-serif;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #393d47;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 12px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="font-size: 30px"
                                              ><span
                                                style="
                                                  color: #000000;
                                                  font-size: 26px;
                                                "
                                                >$${price}</span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="column column-3"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="33.333333333333336%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="button_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-left: 20px;
                                        text-align: left;
                                        padding-top: 25px;
                                        padding-bottom: 15px;
                                      "
                                    >
                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com/" style="height:44px;width:134px;v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#4d61fc"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:22px"><!
                                      [endif]--><a
                                        href="https://coinmarketcap.com/rankings/exchanges/"
                                        style="
                                          text-decoration: none;
                                          display: inline-block;
                                          color: #ffffff;
                                          background-color: #4d61fc;
                                          border-radius: 0px;
                                          width: auto;
                                          border-top: 0px solid #8a3b8f;
                                          font-weight: 400;
                                          border-right: 0px solid #8a3b8f;
                                          border-bottom: 0px solid #8a3b8f;
                                          border-left: 0px solid #8a3b8f;
                                          margin-top: 7px;
                                          padding-top: 0px;
                                          padding-bottom: 0px;
                                          font-family: 'Oswald', Arial,
                                            'Helvetica Neue', Helvetica, sans-serif;
                                          text-align: center;
                                          mso-border-alt: none;
                                          word-break: keep-all;
                                        "
                                        target="_blank"
                                        ><span
                                          style="
                                            padding-left: 15px;
                                            padding-right: 15px;
                                            font-size: 22px;
                                            display: inline-block;
                                            letter-spacing: normal;
                                          "
                                          ><span
                                            style="
                                              font-size: 16px;
                                              line-height: 2;
                                              word-break: break-word;
                                              mso-line-height-alt: 32px;
                                            "
                                            ><span
                                              data-mce-style="font-size: 22px; line-height: 44px;"
                                              style="
                                                font-size: 20px;
                                                line-height: 40px;
                                              "
                                              >SELL / BUY</span
                                            ></span
                                          ></span
                                        ></a
                                      >
                                      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-5"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 640px;
                          "
                          width="640"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 30px;
                                    line-height: 30px;
                                    font-size: 1px;
                                  "
                                >
                                  
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-6"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 640px;
                          "
                          width="640"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-left: 20px;
                                  padding-right: 20px;
                                  padding-top: 40px;
                                  padding-bottom: 40px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td style="padding-bottom: 25px">
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 14px;
                                            mso-line-height-alt: 21px;
                                            color: #393d47;
                                            line-height: 1.5;
                                            font-family: Roboto, Tahoma, Verdana,
                                              Segoe, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <span style="font-size: 16px"
                                              >${footerText}</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="menu_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        color: #4d61fc;
                                        font-family: inherit;
                                        font-size: 18px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            style="
                                              text-align: center;
                                              font-size: 0px;
                                            "
                                          >
                                            <div class="menu-links">
                                              <!--[if mso]>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="">
    <tr>
    <td style="padding-top:0px;padding-right:20px;padding-bottom:0px;padding-left:20px">
    <!
                                              [endif]--><a
                                                href="${projectLink}"
                                                style="
                                                  padding-top: 0px;
                                                  padding-bottom: 0px;
                                                  padding-left: 20px;
                                                  padding-right: 20px;
                                                  display: inline-block;
                                                  color: #4d61fc;
                                                  font-family: Roboto, Tahoma,
                                                    Verdana, Segoe, sans-serif;
                                                  font-size: 18px;
                                                  text-decoration: none;
                                                  letter-spacing: normal;
                                                "
                                                >${projectLinkText}</a
                                              >
                                              <!--[if mso]></td><td><!
                                              [endif]--><span
                                                class="sep"
                                                style="
                                                  font-size: 18px;
                                                  font-family: Roboto, Tahoma,
                                                    Verdana, Segoe, sans-serif;
                                                  color: #4d61fc;
                                                "
                                                >|</span
                                              >
                                              <!--[if mso]></td><![endif]-->
                                              <!--[if mso]></td><td style="padding-top:0px;padding-right:20px;padding-bottom:0px;padding-left:20px"><!
                                              [endif]--><a
                                                href="${siteLink}"
                                                style="
                                                  padding-top: 0px;
                                                  padding-bottom: 0px;
                                                  padding-left: 20px;
                                                  padding-right: 20px;
                                                  display: inline-block;
                                                  color: #4d61fc;
                                                  font-family: Roboto, Tahoma,
                                                    Verdana, Segoe, sans-serif;
                                                  font-size: 18px;
                                                  text-decoration: none;
                                                  letter-spacing: normal;
                                                "
                                                >${siteLinkText}</a
                                              >
                                              <!--[if mso]></td></tr></table><![endif]-->
                                            </div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        padding-bottom: 10px;
                                        padding-top: 75px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class="txtTinyMce-wrapper"
                                          style="
                                            font-size: 12px;
                                            font-family: Roboto, Tahoma, Verdana,
                                              Segoe, sans-serif;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #393d47;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                            "
                                          >
                                            <span style="font-size: 16px"
                                              >${currentYear} © All rights reserved</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-7"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 640px;
                          "
                          width="640"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="icons_block"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      style="
                                        vertical-align: middle;
                                        padding-bottom: 5px;
                                        padding-top: 5px;
                                        color: #9d9d9d;
                                        font-family: inherit;
                                        font-size: 15px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            style="
                                              vertical-align: middle;
                                              text-align: center;
                                            "
                                          >
                                            <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                            <!--[if !vml]><!-->
                                            <table
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="icons-inner"
                                              role="presentation"
                                              style="
                                                mso-table-lspace: 0pt;
                                                mso-table-rspace: 0pt;
                                                display: inline-block;
                                                margin-right: -4px;
                                                padding-left: 0px;
                                                padding-right: 0px;
                                              "
                                            >
                                              <!--<![endif]-->
                                              <tr>
                                                <td
                                                  style="
                                                    vertical-align: middle;
                                                    text-align: center;
                                                    padding-top: 5px;
                                                    padding-bottom: 5px;
                                                    padding-left: 5px;
                                                    padding-right: 6px;
                                                  "
                                                >
                                                  <a
                                                    href="https://www.designedwithbee.com/"
                                                    style="text-decoration: none"
                                                    target="_blank"
                                                    ><img
                                                      align="center"
                                                      alt="Designed with BEE"
                                                      class="icon"
                                                      height="32"
                                                      src="cid:${imageList.bee.cid}"
                                                      style="
                                                        display: block;
                                                        height: auto;
                                                        margin: 0 auto;
                                                        border: 0;
                                                      "
                                                      width="34"
                                                  /></a>
                                                </td>
                                                <td
                                                  style="
                                                    font-family: Roboto, Tahoma,
                                                      Verdana, Segoe, sans-serif;
                                                    font-size: 15px;
                                                    color: #9d9d9d;
                                                    vertical-align: middle;
                                                    letter-spacing: undefined;
                                                    text-align: center;
                                                  "
                                                >
                                                  <a
                                                    href="https://www.designedwithbee.com/"
                                                    style="
                                                      color: #9d9d9d;
                                                      text-decoration: none;
                                                    "
                                                    target="_blank"
                                                    >Designed with BEE</a
                                                  >
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End -->
      </body>
    </html>
    `,
})
