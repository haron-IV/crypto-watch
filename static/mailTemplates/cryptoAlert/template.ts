/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable no-tabs */
import { imageList, mapToAttachments } from './imageList'

export const template = () => ({
  attachments: mapToAttachments(imageList),
  html: `
	<html>
	<head>
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
				line-height: inherit
			}
	
			@media (max-width:620px) {
				.icons-inner {
					text-align: center;
				}
	
				.icons-inner td {
					margin: 0 auto;
				}
	
				.fullMobileWidth,
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
	
				.reverse {
					display: table;
					width: 100%;
				}
	
				.reverse .column.first {
					display: table-footer-group !important;
				}
	
				.reverse .column.last {
					display: table-header-group !important;
				}
	
				.row-6 td.column.first>table,
				.row-6 td.column.last>table {
					padding-left: 15px;
					padding-right: 15px;
				}
	
				.row-4 .column-1 {
					border-right: 16px solid #151030;
					border-left: 16px solid #151030;
				}
			}
		</style>
	</head>
	
	<body style="background-color: #080324; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
		<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
			style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #080324;" width="100%">
			<tbody>
				<tr>
					<td>
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0d0733;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
											role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
											<tbody>
												<tr>
													<td class="column column-1"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="100%">
														<table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
															<tr>
																<td>
																	<div style="font-family: sans-serif">
																		<div class="txtTinyMce-wrapper"
																			style="font-size: 14px; mso-line-height-alt: 16.8px; color: #393d47; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																			<p style="margin: 0; font-size: 14px; text-align: center;"><a
																					href="http://www.example.com" rel="noopener"
																					style="text-decoration: none; color: #807aa0;" target="_blank"
																					title="View in the browser">View in the browser</a> - <a
																					href="http://www.example.com" rel="noopener"
																					style="text-decoration: none; color: #807aa0;" target="_blank"
																					title="Unsubscribe">Unsubscribe</a></p>
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
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
											role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: top center; background-repeat: no-repeat; color: #000000; background-image: url('images/background_top.png'); width: 600px;"
											width="600">
											<tbody>
												<tr>
													<td class="column column-1"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 15px; padding-right: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="50%">
														<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
															<tr>
																<td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:35px;">
																	<div style="font-family: sans-serif">
																		<div class="txtTinyMce-wrapper"
																			style="font-size: 14px; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																			<p style="margin: 0; font-size: 14px; mso-line-height-alt: 33px;"><span
																					style="font-size:22px;">Crypto Alert!</span></p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
															<tr>
																<td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
																	<div style="font-family: sans-serif">
																		<div class="txtTinyMce-wrapper"
																			style="font-size: 14px; mso-line-height-alt: 21px; color: #807aa0; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																			<p style="margin: 0; font-size: 14px;">Some of your cryptocurrency alert was
																				triggered. Check out the details below.</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
													</td>
													<td class="column column-2"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 15px; padding-right: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="50%">
														<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td
																	style="padding-bottom:25px;padding-left:10px;padding-right:10px;padding-top:25px;width:100%;">
																	<div align="center" style="line-height:10px"><img alt="Start Trading Main Image"
																			src="cid:${imageList.mainImage.cid}"
																			style="display: block; height: auto; border: 0; width: 250px; max-width: 100%;"
																			title="Start Trading Main Image" width="250" /></div>
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
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
											role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
											<tbody>
												<tr>
													<td class="column column-1"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 15px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="100%">
														<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td style="width:100%;padding-right:0px;padding-left:0px;">
																	<div align="center" style="line-height:10px"><img class="big" src="cid:${imageList.top.cid}"
																			style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;"
																			width="600" /></div>
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
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
											role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #151030; color: #000000; width: 600px;"
											width="600">
											<tbody>
												<tr>
													<td class="column column-1"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;"
														width="33.333333333333336%">
														<table border="0" cellpadding="0" cellspacing="0" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td class="border" style="width:16px;background-color:#151030"></td>
																<td class="content_blocks"
																	style="background-color:#282343;border-bottom:8px solid #151030;border-top:8px solid #151030;max-width:168px;">
																	<table border="0" cellpadding="0" cellspacing="0" class="image_block"
																		role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td style="width:100%;padding-right:0px;padding-left:0px;">
																				<div align="center" style="line-height:10px"><img class="fullMobileWidth big"
																						src="cid:${imageList.lightTop.cid}"
																						style="display: block; height: auto; border: 0; width: 168px; max-width: 100%;"
																						width="168" /></div>
																			</td>
																		</tr>
																	</table>
																	<table border="0" cellpadding="0" cellspacing="0" class="image_block"
																		role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td
																				style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:5px;width:100%;">
																				<div style="line-height:10px"><img alt="BTC Logo Icon"
																						src="cid:${imageList.iconBtc.cid}"
																						style="display: block; height: auto; border: 0; width: 40px; max-width: 100%;"
																						title="BTC Logo Icon" width="40" /></div>
																			</td>
																		</tr>
																	</table>
																	<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
																		width="100%">
																		<tr>
																			<td
																				style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:5px;">
																				<div style="font-family: sans-serif">
																					<div class="txtTinyMce-wrapper"
																						style="font-size: 14px; mso-line-height-alt: 16.8px; color: #807aa0; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																						<p style="margin: 0; font-size: 14px;"><span
																								style="font-size:12px;">BTC/USD</span></p>
																					</div>
																				</div>
																			</td>
																		</tr>
																	</table>
																	<table border="0" cellpadding="0" cellspacing="0" class="image_block"
																		role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td
																				style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:5px;width:100%;">
																				<div style="line-height:10px"><img alt="Chart Up Reference"
																						src="cid:${imageList.chartGreen.cid}"
																						style="display: block; height: auto; border: 0; width: 127px; max-width: 100%;"
																						title="Chart Up Reference" width="127" /></div>
																			</td>
																		</tr>
																	</table>
																	<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
																		width="100%">
																		<tr>
																			<td
																				style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:5px;">
																				<div style="font-family: sans-serif">
																					<div class="txtTinyMce-wrapper"
																						style="font-size: 14px; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																						<p style="margin: 0; font-size: 14px;"><span
																								style="font-size:16px;">$33,430.12</span></p>
																					</div>
																				</div>
																			</td>
																		</tr>
																	</table>
																	<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
																		width="100%">
																		<tr>
																			<td style="padding-left:15px;padding-right:15px;">
																				<div style="font-family: sans-serif">
																					<div class="txtTinyMce-wrapper"
																						style="font-size: 14px; mso-line-height-alt: 16.8px; color: #807aa0; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																						<p style="margin: 0; font-size: 14px;"><span
																								style="font-size:10px;">$33,430.12</span></p>
																					</div>
																				</div>
																			</td>
																		</tr>
																	</table>
																	<table border="0" cellpadding="0" cellspacing="0" class="image_block"
																		role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td style="width:100%;padding-right:0px;padding-left:0px;">
																				<div align="center" style="line-height:10px"><img class="fullMobileWidth big"
																						src="cid:${imageList.lightBottom.cid}"
																						style="display: block; height: auto; border: 0; width: 168px; max-width: 100%;"
																						width="168" /></div>
																			</td>
																		</tr>
																	</table>
																</td>
																<td class="border" style="width:16px;background-color:#151030"></td>
															</tr>
														</table>
													</td>
													<td class="column column-2"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 15px; padding-right: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="33.333333333333336%">
														<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td
																	style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:26px;width:100%;">
																	<div style="line-height:10px"><img alt="ADA Logo Icon" src="cid:${imageList.iconAda.cid}"
																			style="display: block; height: auto; border: 0; width: 40px; max-width: 100%;"
																			title="ADA Logo Icon" width="40" /></div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
															<tr>
																<td style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:5px;">
																	<div style="font-family: sans-serif">
																		<div class="txtTinyMce-wrapper"
																			style="font-size: 14px; mso-line-height-alt: 16.8px; color: #807aa0; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																			<p style="margin: 0; font-size: 14px;"><span style="font-size:12px;">ADA/USD</span>
																			</p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td
																	style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:5px;width:100%;">
																	<div style="line-height:10px"><img alt="Chart Up Reference"
																			src="cid:${imageList.chartGreen.cid}"
																			style="display: block; height: auto; border: 0; width: 127px; max-width: 100%;"
																			title="Chart Up Reference" width="127" /></div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
															<tr>
																<td style="padding-bottom:5px;padding-left:15px;padding-right:15px;padding-top:5px;">
																	<div style="font-family: sans-serif">
																		<div class="txtTinyMce-wrapper"
																			style="font-size: 14px; mso-line-height-alt: 16.8px; color: #ffffff; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																			<p style="margin: 0; font-size: 14px;"><span
																					style="font-size:16px;">$33,430.12</span></p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
															<tr>
																<td style="padding-left:15px;padding-right:15px;padding-bottom:5px;">
																	<div style="font-family: sans-serif">
																		<div class="txtTinyMce-wrapper"
																			style="font-size: 14px; mso-line-height-alt: 16.8px; color: #807aa0; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																			<p style="margin: 0; font-size: 14px;"><span
																					style="font-size:10px;">$33,430.12</span></p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
													</td>
													<td class="column column-3"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 15px; padding-right: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="33.333333333333336%">
														<div class="spacer_block" style="height:36px;line-height:15px;font-size:1px;"></div>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
											role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
											<tbody>
												<tr>
													<td class="column column-1"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 10px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="100%">
														<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td style="width:100%;padding-right:0px;padding-left:0px;">
																	<div align="center" style="line-height:10px"><img class="big" src="cid:${imageList.bottom.cid}"
																			style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;"
																			width="600" /></div>
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
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
											role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
											<tbody>
												<tr class="reverse">
													<td class="column column-1 first"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 15px; padding-right: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="50%">
														<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td
																	style="padding-bottom:20px;padding-left:15px;padding-right:15px;padding-top:20px;width:100%;">
																	<div align="center" style="line-height:10px"><img alt="Chart Pie Reference Image"
																			src="cid:${imageList.chartGreen.cid}"
																			style="display: block; height: auto; border: 0; width: 203px; max-width: 100%;"
																			title="Chart Pie Reference Image" width="203" /></div>
																</td>
															</tr>
														</table>
													</td>
													<td class="column column-2 last"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-left: 15px; padding-right: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="50%">
														<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
															<tr>
																<td style="padding-bottom:15px;padding-left:15px;padding-right:15px;padding-top:50px;">
																	<div style="font-family: sans-serif">
																		<div class="txtTinyMce-wrapper"
																			style="font-size: 14px; mso-line-height-alt: 21px; color: #ffffff; line-height: 1.5; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																			<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;">
																				<span style="font-size:16px;">You don't have to wait, just visit our page
																					👩🏼‍💻</span></p>
																		</div>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="button_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td
																	style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:left;">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:122px;v-text-anchor:middle;" arcsize="39%" stroke="false" fillcolor="#fecf07"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#080324; font-family:sans-serif; font-size:16px"><![endif]-->
																	<div
																		style="text-decoration:none;display:inline-block;color:#080324;background-color:#fecf07;border-radius:16px;width:auto;border-top:0px solid TRANSPARENT;font-weight:400;border-right:0px solid TRANSPARENT;border-bottom:0px solid TRANSPARENT;border-left:0px solid TRANSPARENT;padding-top:5px;padding-bottom:5px;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;">
																		<span
																			style="padding-left:25px;padding-right:25px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
																				style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>visit
																					page</strong></span></span></div>
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
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
											role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-position: top center; background-repeat: no-repeat; color: #000000; background-image: url('images/background_bottom.png'); width: 600px;"
											width="600">
											<tbody>
												<tr>
													<td class="column column-1"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="100%">
														<table border="0" cellpadding="10" cellspacing="0" class="divider_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td>
																	<div align="center">
																		<table border="0" cellpadding="0" cellspacing="0" role="presentation"
																			style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
																			<tr>
																				<td class="divider_inner"
																					style="font-size: 1px; line-height: 1px; border-top: 1px solid #282343;">
																					<span></span></td>
																			</tr>
																		</table>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="menu_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td
																	style="color:#7b7b7b;font-family:inherit;font-size:12px;padding-bottom:5px;padding-top:25px;text-align:center;">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
																		<tr>
																			<td style="text-align:center;font-size:0px;">
																				<div class="menu-links">
																					<!--[if mso]>
		<table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="">
		<tr>
		<td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
		<![endif]--><span class="label" style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;display:inline;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;font-size:12px;color:false;letter-spacing:normal;">Cryptocurrencies</span>
																					<!--[if mso]></td><td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px"><![endif]--><span
																						class="label"
																						style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;display:inline;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;font-size:12px;color:false;letter-spacing:normal;">Exchanges</span>
																					<!--[if mso]></td><td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px"><![endif]--><span
																						class="label"
																						style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;display:inline;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;font-size:12px;color:false;letter-spacing:normal;">NFT</span>
																					<!--[if mso]></td><td style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px"><![endif]--><a
																						href="http://www.example.com"
																						style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px;display:inline-block;color:#7b7b7b;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;font-size:12px;text-decoration:none;letter-spacing:normal;">Portfolio</a>
																					<!--[if mso]></td></tr></table><![endif]-->
																				</div>
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="social_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td
																	style="padding-bottom:10px;padding-left:5px;padding-right:5px;padding-top:10px;text-align:center;">
																	<table align="center" border="0" cellpadding="0" cellspacing="0" class="social-table"
																		role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="208px">
																		<tr>
																			<td style="padding:0 10px 0 10px;"><a href="" target="_blank"><img alt="Twitter"
																						height="32" src="cid:${imageList.twitter2x.cid}"
																						style="display: block; height: auto; border: 0;" title="Twitter"
																						width="32" /></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="" target="_blank"><img alt="Instagram"
																						height="32" src="cid:${imageList.instagram2x.cid}"
																						style="display: block; height: auto; border: 0;" title="Instagram"
																						width="32" /></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="" target="_blank"><img alt="Medium"
																						height="32" src="cid:${imageList.medium2x.cid}"
																						style="display: block; height: auto; border: 0;" title="Medium"
																						width="32" /></a></td>
																			<td style="padding:0 10px 0 10px;"><a
																					href="https://www.linkedin.com/shareArticle?mini=true&url=" target="_blank"><img
																						alt="LinkedIn" height="32" src="cid:${imageList.linkedin2x.cid}"
																						style="display: block; height: auto; border: 0;" title="LinkedIn"
																						width="32" /></a></td>
																		</tr>
																	</table>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
															<tr>
																<td style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:10px;">
																	<div style="font-family: sans-serif">
																		<div class="txtTinyMce-wrapper"
																			style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #7b7b7b; line-height: 1.2; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif;">
																			<p style="margin: 0; font-size: 14px; text-align: center;"><span
																					style="font-size:12px;">© 2022 Your Brand. All Rights Reserved.</span></p>
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
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation"
							style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack"
											role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
											<tbody>
												<tr>
													<td class="column column-1"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="100%">
														<table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
															<tr>
																<td
																	style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																	<table cellpadding="0" cellspacing="0" role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
																		<tr>
																			<td style="vertical-align: middle; text-align: center;">
																				<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																				<!--[if !vml]><!-->
																				<table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation"
																					style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
																					<!--<![endif]-->
																					<tr>
																						<td
																							style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;">
																							<a href="https://www.designedwithbee.com/" style="text-decoration: none;"
																								target="_blank"><img align="center" alt="Designed with BEE" class="icon"
																									height="32" src="cid:${imageList.bee.cid}"
																									style="display: block; height: auto; margin: 0 auto; border: 0;"
																									width="34" /></a></td>
																						<td
																							style="font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;">
																							<a href="https://www.designedwithbee.com/"
																								style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed
																								with BEE</a></td>
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
	</body>
	</html>
	`,
})
