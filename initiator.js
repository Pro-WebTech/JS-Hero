
const el = document.createElement("div");

el.classList.add("preloader");

document.body.appendChild(el);

/////normal css

// var linki = document.createElement('link');
// linki.href = `https://sn.getmycrmagency.com/css/css.php?id=${personaliser}`;
// linki.rel = 'stylesheet';
// //link.integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm";
// linki.media='screen';
// document.getElementsByTagName('head')[0].appendChild(linki);

///end of normal css

// var link = document.createElement('link');
// link.href = `https://sn.getmycrmagency.com/css/css1.php?id=${personaliser}`;
// link.rel = 'stylesheet';
// link.crossorigin='anonymous';
// document.getElementsByTagName('head')[0].appendChild(link);

setTimeout(function () {
	// var script = document.createElement('script');
	// script.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
	// script.type = 'text/javascript';
	// //script.integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q";
	// script.crossorigin='anonymous';
	// document.getElementsByTagName('head')[0].appendChild(script);

	// var script2 = document.createElement('script');
	// script2.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
	// script2.type = 'text/javascript';
	// //script2.integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl";
	// script2.crossorigin='anonymous';
	// document.getElementsByTagName('head')[0].appendChild(script2);

	// $('.exampleModal').click();

	/////style.css

	// var link5 = document.createElement('link');
	// link5.href = `https://sn.getmycrmagency.com/js/style.css`;
	// link5.rel = 'stylesheet';
	// link5.media='screen';
	// document.getElementsByTagName('head')[0].appendChild(link5);

	///end of style.css

	/////style.css
	// let loaded = false;
	let knowledge_link = '';
	// var link6 = document.createElement('link');
	// link6.href = `http://getbootstrap.com/examples/jumbotron-narrow/jumbotron-narrow.css`;
	// link6.rel = 'stylesheet';
	// link6.media='screen';
	// document.getElementsByTagName('head')[0].appendChild(link6);
	var loading = false;
	function addTag(tag, key) {
		loading = true;
		$.ajax({
			type: "POST",
			url: 'https://rest.gohighlevel.com/v1/contacts/' + window.location.href.split("/")[8] + '/tags/',
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + key);
			},
			data: {
				tags: [tag],
			},
			success: function (res) {
				console.log(res)
				const dat = $(".tag-group.mt-2")
				if (dat.length) {
					dat.append('<div data-v-71342320="" id="custom-tag-' + tag + '" class="tag"> ' + tag + ' <a data-v-71342320=""><i data-v-71342320="" class="icon icon-close"></i></a></div>')
				} else {
					$('<div class="tag-group mt-2"><div data-v-71342320="" id="custom-tag-' + tag + '" class="tag"> ' + tag + ' <a data-v-71342320=""><i data-v-71342320="" class="icon icon-close"></i></a></div></div>').insertAfter(".hl-text-input-container.tag-input")
				}
				$('#custom-tag-' + tag + ' a').click(function () {
					if (!loading)
						removeTag(tag, key);
				});
				loading = false
			}
		})
	}

	function addButtons(el,result, user, withUser) {
		console.log("setting timeout")
		setTimeout(function () {

			let temlate =
				'<div id="cont" class="flex flex-row justify-end" style="height:55px;background-color:#fff;">'

			result.forEach((el, index) => {
				var MyModel;
				var codeBlock =
					'<div class="content mx-2">' +
					'<button style="background-color: ' + el.color + ' ;" class="mbtt' + '-' + (index + 1) + '">'
					+ '<i class="' + el.icon + ' mr-2"></i>'
					+ el.name +
					'</button>' +
					"</div>";

				temlate = temlate + codeBlock;


				if (el.type == "popup") {
					var link = el.link + "?nojump";
					if (withUser) {
						link = link + "&"
						if (user.lastName)
							link = link + "first_name=" + user.lastName + "&"
						if (user.firstName)
							link = link + "last_name=" + user.firstName + "&"
						if (user.email)
							link = link + "email=" + user.email + "&"
						if(user.phone)
							link = link + "phone=" + user.phone

						// link = el.link + '?first_name=' + user.firstName + '&last_name=' + user.lastName + "&email=" + user.email



					}
					MyModel =
						'<div id="popupModel' + '-' + (index + 1) + '" class="modal1">' +
						'<div class="modal-content">' +
						'<div class="modal-headerr">' +
						'<span class="close' + '-' + (index + 1) + '">&times;</span>' +
						"</div>" +
						'<div class="modal-bod">' +
						' <iframe style="margin: 0 auto;width: 100%;height: 80vh;" src="' +
						link +
						'" title="Iframe Example"></iframe>' +
						" </div>" +
						" </div>" +
						"</div>";
					$("body").append(MyModel);
				}






			});
			$(el).prepend(temlate +
				'</div>')

			result.forEach((el, index) => {
				if (el.type == 'popup') {
					$('.mbtt' + '-' + (index + 1)).click(function () {
						$('#popupModel' + '-' + (index + 1) + '').css("display", "block");
					});
					$('.close' + '-' + (index + 1)).click(function () {
						$('#popupModel' + '-' + (index + 1) + '').css("display", "none");
					});
				}
				if (el.type == 'tag') {
					$('.mbtt' + '-' + (index + 1)).click(function () {
						if (($('.tag').text() !== ' ' + el.tag + ' ') && !loading) addTag(el.tag, el.api_key)
					});
				}
			})




			var linkd = document.createElement("link");

			linkd.href = `https://sn.getmycrmagency.com/css/buttons.css`;
			linkd.rel = "stylesheet";
			linkd.crossorigin = "anonymous";
			document.getElementsByTagName("head")[0].appendChild(linkd);


			document.getElementsByClassName("preloader")[0].style.display =
				"none";
		}, 500);
		// }, 7000);
		// });
	}
	function removeTag(tag, key) {
		loading = true;
		$.ajax({
			type: "DELETE",
			url: 'https://rest.gohighlevel.com/v1/contacts/' + window.location.href.split("/")[8] + '/tags/',
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + key);
			},
			data: {
				tags: [tag]
			},
			success: function (res) {
				$('#custom-tag-' + tag).remove()
				loading = false;
			}
		})
	}
	function fetchButtons(selector) {
		const see = window.location.href.split("/")
		$.ajax({
			url: `https://getmycrmagency.com/buttons/find/${see[5]}`,
			success: function (result) {

				if (result) {
					if (!result.length) return
					else {
						$.ajax({
							url: `https://rest.gohighlevel.com/v1/contacts/${see[see.length-1]}`,
							beforeSend: function (xhr) {
								xhr.setRequestHeader('Authorization', 'Bearer ' + result[0].api_key);
							},
							success: function ({ contact }) {
								console.log("done", contact)

								addButtons(selector,result, contact, true)
							},
							error: function () {
								console.log("errrrrrrrrrrrr")
								addButtons(selector,result, null, false)

							}
						})
					}

				}
			},
		});

	}
	///end of style.css


	$(document).ready(function () {
		// Toggle the blurred class

		function sidebar() {
			var trigger = $("#trigger, #close"),
				menu = $(".sidebar");

			trigger.on("click", function () {
				$(this).toggleClass("active");
				menu.toggleClass("closed");
				$("#blurrMe").toggleClass("blurred"); // just here
			});
		}
		function deploy() {
			sidebar();
		}
		
		window.addEventListener(
			"routeChangeEvent",
			function (e) {
				// console.log("window.addEventListener", $(".hl_nav-header > nav").find("#cust_knowledge").length, loaded)
				// if (!$(".hl_nav-header > nav").find("#cust_knowledge").length && loaded) {
				// 	console.log("appending knowledge_link");
				// 	$(".hl_nav-header > nav").append(`
				// <a href="`+ knowledge_link + `" target="_blanc" id="cust_knowledge" class="w-full group px-3 flex items-center justify-center md:justify-center lg:justify-start
				// xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_reputation" exact-path-active-class="exact-path-active-class" meta="reputation"><img src="https://storage.googleapis.com/highlevel-backend.appspot.com/sidebar-v2/icon_reputation.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2"><span class="hl_text-overflow hidden md:hidden nav-title lg:block xl:block"> knowledge base </span><!----><!----></a>`)
				// }
				// alert(e.detail.to.name+" ========>>>> "+e.detail.from.name)
				if (e.detail.to.name == 'contact_detail-v2') fetchButtons(".hl_wrapper--inner.hl_contact-details.hl_contact-details-new");
				if (e.detail.to.name == 'conversations-id-v2' && e.detail.from.name !== 'conversations-id-v2') fetchButtons("#conversations");
				if (e.detail.from.name == 'contact_detail-v2'  || (e.detail.from.name == 'conversations-id-v2' && e.detail.to.name !== 'conversations-id-v2')) { $("#cont").remove(); $(".modal1").remove(); }
			}
		)
		deploy();

	});

	const myArr = window.location.href.split("/");
	//console.log(myArr[5])
	if (myArr[6] === "dashboard" || myArr[6] === "launchpad") {
		//console.log('myarr 4')
		console.log(myArr[4]);

		$.ajax({
			url: `https://getmycrmagency.com/checkpopup/${myArr[5]}/${personaliser}`,
			success: function (result) {
				console.log(result);
				if (result.response == "success") {
					$("#app").append(
						`<button type="button" class="btn btn-primary exampleModal" data-toggle="modal" data-target="#exampleModal">Launch demo modal</button><div class="modal fade" style="height:800px" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg" role="document"><div class="modal-content" style="height:1000px;width:900px!important;"><div class="modal-header"><h2 class="modal-title" id="exampleModalLabel">${result.name}</h2><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"> <iframe width="100%" height="100%" src="https://book.animaledventures.com/bookareservation" title="description"></iframe> </div></div></div></div>`
					);
					$(".modal").on("shown.bs.modal", function () {
						//correct here use 'shown.bs.modal' event which comes in bootstrap3
						$(this).find("iframe").attr("src", result.link);
					});
					$(".exampleModal").click();
				}
			},
		});
	}


	///user control

	$.ajax({
		url: `https://getmycrmagency.com/checkextension?uid=${personaliser}`,
		success: function (result) {
			console.log(result,"see step")
			///first feature - chat support
			if (result.includes(1)) {
				var link = document.createElement("link");
				link.href = "https://fonts.googleapis.com/css?family=Roboto:400,500";
				link.rel = "stylesheet";
				document.getElementsByTagName("head")[0].appendChild(link);

				var script = document.createElement("script");
				script.src = "https://polyfill.io/v3/polyfill.min.js?features=default";
				script.type = "text/javascript";
				document.getElementsByTagName("head")[0].appendChild(script);

				window.addEventListener(
					"routeChangeEvent",
					function (e) {
						function initAutocomplete() {
							console.log("init2 ");
							address1Field = document.getElementsByName("msgsndr4")[0];
							//address2Field = document.querySelector("#address2");
							postalField = document.getElementsByName("msgsndr7")[0];
							// Create the autocomplete object, restricting the search predictions to
							// addresses in the US and Canada.
							autocomplete = new google.maps.places.Autocomplete(
								address1Field,
								{
									componentRestrictions: { country: ["us", "ca"] },
									fields: ["address_components", "geometry"],
									types: ["address"],
								}
							);

							address1Field.focus();
							// When the user selects an address from the drop-down, populate the
							// address fields in the form.
							autocomplete.addListener("place_changed", fillInAddress);
						}

						function fillInAddress() {
							// Get the place details from the autocomplete object.
							const place = autocomplete.getPlace();
							let address1 = "";
							let postcode = "";

							// Get each component of the address from the place details,
							// and then fill-in the corresponding field on the form.
							// place.address_components are google.maps.GeocoderAddressComponent objects
							// which are documented at http://goo.gle/3l5i5Mr
							for (const component of place.address_components) {
								const componentType = component.types[0];
								event = new Event("input");
								address1Field.dispatchEvent(event);
								// postalField.dispatchEvent(event);

								switch (componentType) {
									case "street_number": {
										address1 = `${component.long_name} ${address1}`;
										break;
									}

									case "route": {
										address1 += component.short_name;
										break;
									}

									case "postal_code": {
										postcode = `${component.long_name}${postcode}`;
										break;
									}

									case "postal_code_suffix": {
										postcode = `${postcode}-${component.long_name}`;
										break;
									}
									case "locality":
										document.getElementsByName("city")[0].value =
											component.long_name;
										document
											.getElementsByName("city")[0]
											.dispatchEvent(new Event("input"));

										break;
									case "administrative_area_level_1": {
										// document.getElementsByName("state")[0].dispatchEvent(event);
										document.getElementsByName("state")[0].value =
											component.short_name;
										document
											.getElementsByName("state")[0]
											.dispatchEvent(new Event("input"));
										break;
									}
									case "country":
										document.getElementsByName("country")[0].value =
											component.long_name;
										document
											.getElementsByName("country")[0]
											.dispatchEvent(new Event("input"));
										break;
								}
							}

							address1Field.value = address1;
							postalField.value = postcode;
							postalField.dispatchEvent(new Event("input"));
							// After filling the form with address components from the Autocomplete
							// prediction, set cursor focus on the second address line to encourage
							// entry of subpremise information such as apartment, unit, or floor number.
							// address2Field.focus();
						}

						if (e.detail.to.fullPath.indexOf("contacts/detail/") > -1) {
							console.log("happening");
							inter = setInterval(
								function () {
									element = document.getElementsByName("msgsndr4")[0];
									if (typeof element != "undefined" && element != null) {
										clearInterval(inter);

										console.log("init");
										let autocomplete;
										let address1Field;

										let postalField;
										// google.maps.event.addDomListener(window, 'load', initAutocomplete);
										initAutocomplete();
									}
								},

								1000
							);
						}
					},
					false
				);

				//alert("you have enabled chat widget")
			}
			//end of first feature

			///second feature
			if (result.includes(2)) {
				window.help_company_key = "1ee18810051dd644ee607db5";
				window.helppier_app_id = "i3ABgpcop9ebdg6SN";
				var script1 = document.createElement("script");
				script1.setAttribute("id", "helppierEmbedyyy");
				script1.setAttribute("defer", "");
				script1.setAttribute(
					"src",
					"https://widget.chathq.net/container/633d82d4c8e4d202d0c483e4/container.min.js?k=3476e60befec40e41ccb7d228881dbca"

				);
				// var script2 = document.createElement("script");
				// script2.setAttribute("id", "helppierEmbed");
				// script2.setAttribute("defer", "");
				// script2.setAttribute(
				// 	"src",
				// 	"https://km.helppier.com/widget/js/start.js?help_company_key=" +
				// 	window.help_company_key
				// );
				console.log("in step 2")
				document.head.appendChild(script1);
				
				// document.head.appendChild(script2);
			}

			if (result.includes(3)) {
				// console.log("in step 3")
				knowledge_link = result[0]
				
				let intVal;
				function locationChange() {
					if (!$(".hl_nav-header > nav").find("#cust_knowledge").length) {
						// loaded = true;
						$(`<a href="`+ knowledge_link + `" target="_blanc" id="cust_knowledge" class="w-full group px-3 flex items-center justify-center md:justify-center lg:justify-start	xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_reputation" exact-path-active-class="exact-path-active-class" meta="reputation"><img src="https://sn.getmycrmagency.com/question.svg" style="filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(207deg) brightness(106%) contrast(101%);" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2"><span class="hl_text-overflow hidden md:hidden nav-title lg:block xl:block"> Knowledge Base </span><!----><!----></a>`).insertAfter($(".hl_nav-header > nav > a:nth-child("+(($( ".hl_nav-header > nav").children().length))+")"))
			// $(".hl_nav-header > nav").append(`
						// 	<a href="`+ knowledge_link + `" target="_blanc" id="cust_knowledge" class="w-full group px-3 flex items-center justify-center md:justify-center lg:justify-start
						// 	xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_reputation" exact-path-active-class="exact-path-active-class" meta="reputation"><img src="https://storage.googleapis.com/highlevel-backend.appspot.com/sidebar-v2/icon_reputation.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2"><span class="hl_text-overflow hidden md:hidden nav-title lg:block xl:block"> knowledgebase </span><!----><!----></a>`)
						clearInterval(intVal);
						
					}
				}
				function initPage() {
					if ($(".hl_nav-header > nav").length) {
						// loaded = true;
						// alert("in init");

						$(`<a href="`+ knowledge_link + `" target="_blanc" id="cust_knowledge" class="w-full group px-3 flex items-center justify-center md:justify-center lg:justify-start	xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_reputation" exact-path-active-class="exact-path-active-class" meta="reputation"><img src="https://sn.getmycrmagency.com/question.svg" style="filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(207deg) brightness(106%) contrast(101%);" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2"><span class="hl_text-overflow hidden md:hidden nav-title lg:block xl:block"> Knowledge Base </span><!----><!----></a>`).insertAfter($(".hl_nav-header > nav > a:nth-child("+(($( ".hl_nav-header > nav").children().length))+")"))
			// $(".hl_nav-header > nav").append(`
						// 	<a href="`+ knowledge_link + `" target="_blanc" id="cust_knowledge" class="w-full group px-3 flex items-center justify-center md:justify-center lg:justify-start
						// 	xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_reputation" exact-path-active-class="exact-path-active-class" meta="reputation"><img src="https://storage.googleapis.com/highlevel-backend.appspot.com/sidebar-v2/icon_reputation.svg" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2"><span class="hl_text-overflow hidden md:hidden nav-title lg:block xl:block"> knowledgebase </span><!----><!----></a>`)
						clearInterval(intVal);
						
					}
				}
				if(knowledge_link !== '' && knowledge_link !== null){
				intVal = setInterval(initPage, 1000);
				window.addEventListener(
					"locationChangeEvent",
					function (e) {
						// alert("changer loc")
						// alert("window.addEventListener", $(".hl_nav-header > nav").find("#cust_knowledge").length)
						// alert(loaded)
						// if (!$(".hl_nav-header > nav").find("#cust_knowledge").length) {
							intVal = setInterval(locationChange, 1000);
							// alert("appending knowledge_link");
							// $(`<a href="`+ knowledge_link + `" target="_blanc" id="cust_knowledge" class="w-full group px-3 flex items-center justify-center md:justify-center lg:justify-start	xl:justify-start text-sm font-medium rounded-md cursor-pointer font-medium opacity-70 hover:opacity-100 py-2 md:py-2" id="sb_reputation" exact-path-active-class="exact-path-active-class" meta="reputation"><img src="https://sn.getmycrmagency.com/question.svg" style="filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(207deg) brightness(106%) contrast(101%);" class="md:mr-0 h-5 w-5 mr-2 lg:mr-2 xl:mr-2"><span class="hl_text-overflow hidden md:hidden nav-title lg:block xl:block"> Help Guides(knowledgebase) </span></a>`).insertAfter($(".hl_nav-header > nav > a:nth-child("+(($( ".hl_nav-header > nav").children().length))+")"))
									// }
					}
				)
			}
			}

			if (result.includes("black")) {
				//css dark version

				var linkd = document.createElement("link");
				linkd.href = `https://sn.getmycrmagency.com/css/black.php?id=${personaliser}`;
				linkd.rel = "stylesheet";
				linkd.crossorigin = "anonymous";
				document.getElementsByTagName("head")[0].appendChild(linkd);

				setTimeout(function () {
					document.getElementsByClassName("preloader")[0].style.display =
						"none";
				}, 2000);
			}
			if (result.includes("white")) {
				var linkl = document.createElement("link");
				linkl.href = `https://sn.getmycrmagency.com/css/white.php?id=${personaliser}`;
				linkl.rel = "stylesheet";
				linkl.crossorigin = "anonymous";
				document.getElementsByTagName("head")[0].appendChild(linkl);
				setTimeout(function () {
					document.getElementsByClassName("preloader")[0].style.display =
						"none";
				}, 2000);
			}

			if (result.includes("system")) {
				var linkl = document.createElement("link");
				linkl.href = `https://sn.getmycrmagency.com/css/system.php?id=${personaliser}`;
				linkl.rel = "stylesheet";
				linkl.crossorigin = "anonymous";
				document.getElementsByTagName("head")[0].appendChild(linkl);
				setTimeout(function () {
					document.getElementsByClassName("preloader")[0].style.display =
						"none";
				}, 2000);
			}
			//end of first feature
		},
	});
	//end of user control

	//admin control

	$.ajax({
		url: `https://getmycrmagency.com/checkservice?uid=${personaliser}`,
		success: function (result) {
			///first feature - chat support admin
			if (result.includes(1)) {
				//Basic guide
				console.log("basic");
				window.help_company_key = "1ee18810051dd644ee607db5";
				var accessLevel = "basic"; // user type from database.
				window.helppierSegmentation = { accessLevel: accessLevel };
				window.helppier_app_id = "i3ABgpcop9ebdg6SN";
				var script = document.createElement("script");

				script.setAttribute("id", "helppierEmbed");
				script.setAttribute("defer", "");
				script.setAttribute(
					"src",
					"https://km.helppier.com/widget/js/start.js?help_company_key=" +
					window.help_company_key
				);
				// document.head.appendChild(script);
			}
			//end of first feature admin

			///second feature admin
			if (result.includes(2)) {
				//advanced guides
				console.log("advanced");
				window.help_company_key = "1ee18810051dd644ee607db5";
				var accessLevel = "advanced"; // user type from database.
				window.helppierSegmentation = { accessLevel: accessLevel };
				window.helppier_app_id = "i3ABgpcop9ebdg6SN";
				var script = document.createElement("script");

				script.setAttribute("id", "helppierEmbed");
				script.setAttribute("defer", "");
				script.setAttribute(
					"src",
					"https://km.helppier.com/widget/js/start.js?help_company_key=" +
					window.help_company_key
				);
				// document.head.appendChild(script);
			}
			//end of second feature admin

			///third feature admin
			if (result.includes(3)) {
				// agency level
				console.log("agency");
				window.help_company_key = "1ee18810051dd644ee607db5";
				var accessLevel = "agency"; // user type from database.
				window.helppierSegmentation = { accessLevel: accessLevel };
				window.helppier_app_id = "i3ABgpcop9ebdg6SN";
				var script = document.createElement("script");

				script.setAttribute("id", "helppierEmbed");
				script.setAttribute("defer", "");
				script.setAttribute(
					"src",
					"https://km.helppier.com/widget/js/start.js?help_company_key=" +
					window.help_company_key
				);
				// document.head.appendChild(script);
			}
			//end of third feature admin
		},
	});

	//endof admin control
}, 100);
/** Popup  */

// In this section we are going to be including codes

//console.log('myarr 4')
