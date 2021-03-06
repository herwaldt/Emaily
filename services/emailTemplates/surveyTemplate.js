const keys = require('../../config/keys');

module.exports = survey => {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
        <head> 
        <meta charset="UTF-8"> 
        <meta content="width=device-width, initial-scale=1" name="viewport"> 
        <meta name="x-apple-disable-message-reformatting"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta content="telephone=no" name="format-detection"> 
        <title>Emaily Survey</title> 
        <!--[if (mso 16)]>
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--> 
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
        <!--[if !mso]><!-- --> 
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet"> 
        <!--<![endif]--> 
        <style type="text/css">
        @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:24px!important; text-align:center; line-height:120%!important } h2 { font-size:22px!important; text-align:center; line-height:120%!important } h3 { font-size:18px!important; text-align:center; line-height:120%!important } h1 a { font-size:24px!important } h2 a { font-size:22px!important } h3 a { font-size:18px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:20px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } .es-desk-menu-hidden { display:table-cell!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
        #outlook a {
        padding:0;
        }
        .ExternalClass {
        width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
        line-height:inherit!important;
        }
        .es-desk-hidden {
        display:none;
        float:left;
        overflow:hidden;
        width:0;
        max-height:0;
        line-height:0;
        mso-hide:all;
        }
        .es-button-border:hover a.es-button {
        background:#7dbf44!important;
        border-color:#7dbf44!important;
        }
        .es-button-border:hover {
        background:#7dbf44!important;
        border-color:#7dbf44 #7dbf44 #7dbf44 #7dbf44!important;
        }
        td .es-button-border:hover .es-button-1 {
        background:#7dbf44!important;
        border-color:#7dbf44!important;
        }
        td .es-button-border-2:hover {
        background:#7dbf44!important;
        }
        </style> 
        </head> 
        <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"> 
        <div class="es-wrapper-color" style="background-color:#F6F6F6;"> 
        <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" color="#f6f6f6"></v:fill>
            </v:background>
            <![endif]--> 
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;"> 
            <tr style="border-collapse:collapse;"> 
            <td valign="top" style="padding:0;Margin:0;"> 
            <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"> 
                <table bgcolor="rgba(0, 0, 0, 0)" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"> 
                    <tr style="border-collapse:collapse;"> 
                    <td align="left" style="padding:10px;Margin:0;"> 
                    <!--[if mso]><table width="580"><tr><td width="280" valign="top"><![endif]--> 
                    <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="280" align="left" style="padding:0;Margin:0;"> 
                        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td class="es-infoblock" align="left" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;">Emaily surveys for your customers feedback.</p></td> 
                            </tr> 
                        </table></td> 
                        </tr> 
                    </table> 
                    <!--[if mso]></td><td width="20"></td><td width="280" valign="top"><![endif]--> 
                    <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="280" align="left" style="padding:0;Margin:0;"> 
                        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td class="es-infoblock" align="right" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;"><a href="http://#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC;" _blank>View in browser</a></p></td> 
                            </tr> 
                        </table></td> 
                        </tr> 
                    </table> 
                    <!--[if mso]></td></tr></table><![endif]--></td> 
                    </tr> 
                </table></td> 
                </tr> 
            </table> 
            <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> 
                <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"> 
                <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
                    <tr style="border-collapse:collapse;"> 
                    <td align="left" style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px;background-position:center center;background-color:#D4E8E9;" bgcolor="#D4E8E9"> 
                    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]--> 
                    <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="270" class="es-m-p20b" align="left" style="padding:0;Margin:0;"> 
                        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#D4E8E9" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#D4E8E9;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="left" style="padding:0;Margin:0;padding-bottom:5px;"><img src="https://folbwq.stripocdn.email/content/guids/videoImgGuid/images/36301575137158688.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="125" class="adapt-img"></td> 
                            </tr> 
                        </table></td> 
                        </tr> 
                    </table> 
                    <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--> 
                    <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="270" align="left" style="padding:0;Margin:0;"> 
                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="left" style="padding:5px;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:31px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:47px;color:#83B3B5;"><strong></strong></p></td> 
                            </tr> 
                        </table></td> 
                        </tr> 
                    </table> 
                    <!--[if mso]></td></tr></table><![endif]--></td> 
                    </tr> 
                </table></td> 
                </tr> 
            </table> 
            <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;background-position:left top;background-repeat:no-repeat;"> 
                <table bgcolor="#D4E8E9" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#D4E8E9;"> 
                    <tr style="border-collapse:collapse;"> 
                    <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;"> 
                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> 
                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="center" style="padding:0;Margin:0;padding-top:30px;"><h1 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:bold;color:#83B3B5;">Please take a moment to give us your feedback.</h1></td> 
                            </tr> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="center" style="padding:0;Margin:0;padding-top:10px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">${survey.body}</p></td> 
                            </tr> 
                        </table></td> 
                        </tr> 
                    </table></td> 
                    </tr> 
                    <tr style="border-collapse:collapse;"> 
                    <td align="left" style="Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;padding-bottom:40px;"> 
                    <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="194" valign="top"><![endif]--> 
                    <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="174" class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;"> 
                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;"><a target="_blank" href="${keys.redirectDomain}/api/surveys/${survey.id}/no" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#2CB543;"><img src="https://folbwq.stripocdn.email/content/guids/CABINET_26b3162452cc59077a9f56695f9c277a/images/12011556881497858.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="75"></a></td> 
                            </tr> 
                        </table></td> 
                        <td class="es-hidden" width="20" style="padding:0;Margin:0;"></td> 
                        </tr> 
                    </table> 
                    <!--[if mso]></td><td width="173" valign="top"><![endif]--> 
                    <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="173" class="es-m-p20b" align="center" style="padding:0;Margin:0;"> 
                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="center" style="padding:0;Margin:0;display:none;"></td> 
                            </tr> 
                        </table></td> 
                        </tr> 
                    </table> 
                    <!--[if mso]></td><td width="20"></td><td width="173" valign="top"><![endif]--> 
                    <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="173" align="center" style="padding:0;Margin:0;"> 
                        <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="center" style="padding:0;Margin:0;"><a target="_blank" href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#2CB543;"><img src="https://folbwq.stripocdn.email/content/guids/CABINET_26b3162452cc59077a9f56695f9c277a/images/89181556881562856.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="75"></a></td> 
                            </tr> 
                        </table></td> 
                        </tr> 
                    </table> 
                    <!--[if mso]></td></tr></table><![endif]--></td> 
                    </tr> 
                </table></td> 
                </tr> 
            </table> 
            <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
                <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"> 
                <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#333333;" bgcolor="#333333"> 
                    <tr style="border-collapse:collapse;"> 
                    <td align="left" style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:20px;padding-right:20px;background-position:center center;background-color:#83B3B5;" bgcolor="#83b3b5"> 
                    <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                        <tr style="border-collapse:collapse;"> 
                        <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
                        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="center" style="padding:0;Margin:0;padding-bottom:15px;"> 
                            <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                                <tr style="border-collapse:collapse;"> 
                                <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px;"><img title="Facebook" src="https://folbwq.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                                <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px;"><img title="Twitter" src="https://folbwq.stripocdn.email/content/assets/img/social-icons/circle-white/twitter-circle-white.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                                <td valign="top" align="center" style="padding:0;Margin:0;"><img title="Youtube" src="https://folbwq.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                                </tr> 
                            </table></td> 
                            </tr> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:13px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:20px;color:#FFFFFF;">You are receiving this email because you have been selected for a survey. We value your feedback.</p></td> 
                            </tr> 
                            <tr style="border-collapse:collapse;"> 
                            <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px;"><img src="https://folbwq.stripocdn.email/content/guids/CABINET_26b3162452cc59077a9f56695f9c277a/images/63551556883898512.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="140"></td> 
                            </tr> 
                        </table></td> 
                        </tr> 
                    </table></td> 
                    </tr> 
                </table></td> 
                </tr> 
            </table> 
            </td> 
                </tr> 
            </table></td> 
            </tr> 
        </table> 
        </div>  
        </body>
        </html>
    `;
};
