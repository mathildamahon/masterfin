document.addEventListener("DOMContentLoaded", function () {
var modal_html = '<style>.modal_bg{display:none;align-items:center;justify-content:center;position:fixed;top:0;right:0;left:0;background:rgba(0,0,0,.8);font-family:sans-serif;z-index:999999;min-height:100vh}.modal_box{position:relative;background:rgba(255,255,255,0.85);border-radius:.5rem;padding:2rem;max-width:min(90%,35rem);max-height:90vh;overflow:auto;box-sizing:border-box;text-align:left}.modal_box h2{color:black;margin:1.5rem 0 .5rem 0;}.modal_close{cursor:pointer;display:inline-block;position:absolute;top:.5rem;right:.5rem;padding:.4rem .5rem;background:#d2d2d2;border-radius:.5rem;font-size:1.5rem;line-height:1;color:#151515;transition:opacity .2s}.modal_close:hover{opacity:.8}#c_address{font-weight:700;margin:1rem 0;opacity:.6}.c_button{display:flex;align-items:center;border-radius:.5rem;padding:1rem 1.2rem;background:#073359;text-decoration:none;color:#f8f8ff;font-weight:700;margin-top:1rem;box-shadow:0 6px 8px rgba(0,0,0,.3);transition:background .5s}.c_button:hover{background:#0d5ea5;text-decoration:none}.e_logo{min-width:2rem;margin-right:1rem}.note{margin-bottom:1rem}.guide ol{padding:0 0 0 1.25rem;margin:0}.guide li{margin-bottom:.5rem;opacity:.9}@media screen and (max-width:450px){.modal_bg{height:100%}.modal_box{padding:2rem 1rem 1rem 1rem;max-width:100%;max-height:none;width:100%;height:100%;overflow:auto;border-radius:0}.modal_box h2{line-height:1.2}}.fade-in{-webkit-animation:fade-in .1s cubic-bezier(.25,.46,.45,.94) both;animation:fade-in .1s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}</style><div id="a_modal" class="modal_bg fade-in"><div class="modal_box"><div class="modal_close">⨯</div><div><h2>Get the Community+ app</h2><p class="note"><span id="a_company">Our organization</span> is now on Community+! Please install the free app on your phone to access learning materials, important announcements and exclusive content.</p><a href="https://communitylogin.website/app" class="c_button"><div class="e_logo"><svg viewBox="0 0 270.933 270.933" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a"><stop style="stop-color:#50ceb3;stop-opacity:1" offset="0"/><stop style="stop-color:#47c0e9;stop-opacity:1" offset=".482"/><stop style="stop-color:#6371ff;stop-opacity:1" offset="1"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="0" y1="135.467" x2="270.933" y2="135.467" gradientUnits="userSpaceOnUse"/></defs><rect style="fill:url(#b);fill-opacity:1;stroke:none;stroke-width:16.5348;stroke-linejoin:bevel;paint-order:stroke fill markers" width="270.933" height="270.933" rx="48.68"/><path style="display:inline;fill:#ddebfa;fill-opacity:1;stroke-width:3.68734" d="M31.982-113.402a14.706 14.706 0 0 0-10.428 4.322L-81.69-5.835c-5.76 5.775-5.473 14.808.287 20.568 5.774 5.79 14.215 6.64 19.993.863l5.037-5.04v97.283c0 8.152 6.597 14.749 14.75 14.749h147.493c8.153 0 14.749-6.597 14.749-14.75V10.844l4.407 4.406c5.76 5.76 14.56 5.244 20.339-.52 5.763-5.755 6.066-14.804.291-20.564L42.41-109.08a14.706 14.706 0 0 0-10.428-4.322zM-.242-21.522c8.899 0 16.955 3.612 22.783 9.443L31.983-2.7l9.441-9.379c5.832-5.831 13.888-9.442 22.787-9.442 17.795 0 32.225 14.428 32.225 32.225 0 8.898-5.872 17.332-11.708 23.161l-47.05 47.056a8.051 8.051 0 0 1-11.39 0l-47.174-47.18c-5.837-5.83-11.58-14.139-11.58-23.037 0-17.797 14.43-32.225 32.224-32.225z" transform="matrix(.94007 0 0 .94007 105.4 131.149)"/></svg></div>Download Community+</a><div class="guide"><h2>How to install</h2><ol><li>Tap the button above to download the app.</li><li>Open your browser downloads and tap on Community+.apk to install the app. You may need to allow your browser to install apps first.</li><li>Accept the installation permissions. These will be auto disabled afterwards for your privacy.</li><li>If you get a warning, tap "More details", then "Install anyway". When you open the app, it will auto update to fix this.</li><li>Select to "Open" the app, or tap the Community+ app on your homescreen.</li></ol></div></div></div></div><div id="c_modal" class="modal_bg fade-in"><div class="modal_box"><div class="modal_close">⨯</div><h2>Email us</h2><div id="c_address">office@example.com</div><div id="contact_page_note" style="display:none">Email us using the buttons below or <a href="" id="c_url">visit our contact page</a>.</div><a href="https://communitylogin.website/gmail" target="_blank" class="c_button"><div class="e_logo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66"><path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/><path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/><path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/><path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/><path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/></svg></div>Email us using Gmail →</a><a href="https://communitylogin.website/microsoft" target="_blank" class="c_button"><div class="e_logo"><svg viewBox="0 0 1831.1 1703.3" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M1831.1 894.25a40.879 40.879 0 0 0-19.503-35.131h-.213l-.767-.426-634.49-375.58a86.175 86.175 0 0 0-8.517-5.067 85.17 85.17 0 0 0-78.098 0 86.37 86.37 0 0 0-8.517 5.067l-634.49 375.58-.766.426c-19.392 12.059-25.337 37.556-13.278 56.948a41.346 41.346 0 0 0 14.257 13.868l634.49 375.58a95.617 95.617 0 0 0 8.517 5.068 85.17 85.17 0 0 0 78.098 0 95.52 95.52 0 0 0 8.517-5.068l634.49-375.58a40.84 40.84 0 0 0 20.268-35.685z" fill="#0A2767"/><path d="M520.45 643.48h416.38v381.67H520.45V643.48zm1225.5-387.98V80.91c1-43.652-33.552-79.862-77.203-80.908h-1080.5c-43.652 1.046-78.204 37.256-77.204 80.908V255.5l638.75 170.33 596.17-170.33z" fill="#0364B8"/><path d="M511 255.5h425.833v383.25H511V255.5z" fill="#0078D4"/><path d="M1362.7 255.5H936.87v383.25L1362.7 1022h383.25V638.75L1362.7 255.5z" fill="#28A8EA"/><path d="M936.833 638.75h425.833V1022H936.833V638.75z" fill="#0078D4"/><path d="M936.833 1022h425.833v383.25H936.833V1022z" fill="#0364B8"/><path d="M520.45 1025.2h416.38v346.97H520.45V1025.2z" fill="#14447D"/><path d="M1362.667 1022h383.25v383.25h-383.25V1022z" fill="#0078D4"/><linearGradient id="a" x1="1128.5" x2="1128.5" y1="811.08" y2="1.998" gradientTransform="matrix(1 0 0 -1 0 1705.3)" gradientUnits="userSpaceOnUse"><stop stop-color="#35B8F1" offset="0"/><stop stop-color="#28A8EA" offset="1"/></linearGradient><path d="m1811.6 927.59-.809.426-634.49 356.85c-2.768 1.703-5.578 3.321-8.517 4.769a88.437 88.437 0 0 1-34.407 8.517l-34.663-20.27a86.706 86.706 0 0 1-8.517-4.897l-643.01-366.98h-.298l-21.036-11.753v722.38c.328 48.196 39.653 87.006 87.849 86.7h1230.9c.724 0 1.363-.341 2.129-.341a107.79 107.79 0 0 0 29.808-6.217 86.066 86.066 0 0 0 11.966-6.217c2.853-1.618 7.75-5.152 7.75-5.152a85.974 85.974 0 0 0 34.833-68.772v-722.38a38.323 38.323 0 0 1-19.502 33.343z" fill="url(#a)"/><path d="M1797 891.4v44.287l-663.45 456.79-686.87-486.17a.426.426 0 0 0-.426-.426l-63.023-37.899v-31.938l25.976-.426 54.932 31.512 1.277.426 4.684 2.981s645.56 368.35 647.27 369.2l24.698 14.478c2.129-.852 4.258-1.703 6.813-2.555 1.278-.852 640.88-360.68 640.88-360.68l7.241.427z" fill="#0A2767" opacity=".5"/><path d="m1811.6 927.59-.809.468-634.49 356.85c-2.768 1.703-5.578 3.321-8.517 4.769a88.96 88.96 0 0 1-78.098 0 96.578 96.578 0 0 1-8.517-4.769l-634.49-356.85-.766-.468a38.326 38.326 0 0 1-20.057-33.343v722.38c.305 48.188 39.616 87.004 87.803 86.7H1743.263c48.188.307 87.5-38.509 87.807-86.696V894.247a38.33 38.33 0 0 1-19.504 33.343z" fill="#1490DF"/><path d="m1185.5 1279.6-9.496 5.323a92.806 92.806 0 0 1-8.517 4.812 88.173 88.173 0 0 1-33.47 8.857l241.4 285.48 421.11 101.48a86.785 86.785 0 0 0 26.7-33.343l-637.73-372.6z" opacity=".1"/><path d="m1228.5 1255.4-52.505 29.51a92.806 92.806 0 0 1-8.517 4.812 88.173 88.173 0 0 1-33.47 8.857l113.1 311.84 549.54 74.989a86.104 86.104 0 0 0 34.407-68.815v-9.326l-602.55-351.86z" opacity=".05"/><path d="M514.83 1703.3h1228.3a88.316 88.316 0 0 0 52.59-17.033l-697.09-408.33a86.706 86.706 0 0 1-8.517-4.897l-643.01-366.98h-.298l-20.993-11.838v719.91c-.048 49.2 39.798 89.122 88.999 89.169-.001 0-.001 0 0 0z" fill="#28A8EA"/><path d="M1022 418.72v908.3c-.076 31.846-19.44 60.471-48.971 72.392a73.382 73.382 0 0 1-28.957 5.962h-518.24v-1022.1h85.167v-42.583h433.07c43.019.163 77.834 35.035 77.927 78.055z" opacity=".1"/><path d="M979.42 461.3v908.3a69.36 69.36 0 0 1-6.388 29.808c-11.826 29.149-40.083 48.273-71.54 48.417h-475.66v-1064.6h475.66a71.493 71.493 0 0 1 35.344 8.943c26.104 13.151 42.574 39.883 42.584 69.112z" opacity=".2"/><path d="M979.42 461.3v823.14c-.208 43-34.928 77.853-77.927 78.225h-475.66v-979.42h475.66a71.493 71.493 0 0 1 35.344 8.943c26.104 13.151 42.574 39.883 42.584 69.112z" opacity=".2"/><path d="M936.83 461.3v823.14c-.046 43.067-34.861 78.015-77.927 78.225h-433.07v-979.42h433.07c43.062.023 77.951 34.951 77.927 78.013a.589.589 0 0 1 .001.042z" opacity=".2"/><linearGradient id="b" x1="162.75" x2="774.09" y1="1383.1" y2="324.26" gradientTransform="matrix(1 0 0 -1 0 1705.3)" gradientUnits="userSpaceOnUse"><stop stop-color="#1784D9" offset="0"/><stop stop-color="#107AD5" offset=".5"/><stop stop-color="#0A63C9" offset="1"/></linearGradient><path d="M78.055 383.25h780.72c43.109 0 78.055 34.947 78.055 78.055v780.72c0 43.109-34.946 78.055-78.055 78.055H78.055C34.946 1320.08 0 1285.133 0 1242.025v-780.72c0-43.108 34.947-78.055 78.055-78.055z" fill="url(#b)"/><path d="M243.96 710.63a227.05 227.05 0 0 1 89.17-98.495 269.565 269.565 0 0 1 141.68-35.515 250.886 250.886 0 0 1 131.11 33.683 225.014 225.014 0 0 1 86.742 94.109 303.756 303.756 0 0 1 30.405 138.4 320.546 320.546 0 0 1-31.299 144.78 230.37 230.37 0 0 1-89.425 97.388 260.862 260.862 0 0 1-136.01 34.578 256.355 256.355 0 0 1-134.01-34.067 228.497 228.497 0 0 1-87.892-94.28 296.513 296.513 0 0 1-30.745-136.74 329.253 329.253 0 0 1 30.276-143.84zm95.046 231.23a147.386 147.386 0 0 0 50.163 64.812 131.028 131.028 0 0 0 78.353 23.591 137.244 137.244 0 0 0 83.634-24.358 141.156 141.156 0 0 0 48.715-64.812 251.594 251.594 0 0 0 15.543-90.404 275.198 275.198 0 0 0-14.649-91.554 144.775 144.775 0 0 0-47.182-67.537 129.58 129.58 0 0 0-82.91-25.55 135.202 135.202 0 0 0-80.184 23.804 148.626 148.626 0 0 0-51.1 65.365 259.764 259.764 0 0 0-.341 186.73l-.042-.085z" fill="#fff"/><path d="M1362.7 255.5h383.25v383.25H1362.7V255.5z" fill="#50D9FF"/></svg></div>Email us using Outlook →</a><a href="https://communitylogin.website/yahoo" target="_blank" class="c_button"><div class="e_logo" style="min-width:2.5rem;"><?xml version="1.0" encoding="UTF-8"?><svg version="1.1" viewBox="0 0 1000 577.26" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g transform="translate(674.73 320.69)"><g transform="matrix(20.85 0 0 -20.85 222.77 245.24)" fill="#7b0099"><path d="M 0,0 -4.905,0.604 -4.373,4.954 0.535,4.353 0,0 z" fill="#7b0099"/></g><g transform="matrix(20.85 0 0 -20.85 150.71 -320.19)" fill="#7b0099"><path d="M 0,0 0.034,-19.427 3.63,-19.867 8.348,-1.055 0,0 z" fill="#7b0099"/></g><g transform="matrix(20.85 0 0 -20.85 -78.713 -95.321)" fill="#7b0099"><path d="m0 0c-0.39-0.041-2.015-0.403-2.56-0.52-0.586-0.156-5.928-4.281-6.28-5.296-0.078-0.352-0.116-0.89-0.116-1.396l-0.038-0.818c0-0.586 0.161-1.526 0.239-2.036 0.35-0.076 2.891-9e-3 3.36-0.087l-0.057-1.046c-0.457 0.032-3.685 0.022-5.527 0.022-0.938 0-3.945-0.1-4.87-0.072l0.175 0.995c0.507 0.04 2.604-0.09 3.066 0.396 0.229 0.243 0.157 0.501 0.157 1.904v0.664c0 0.314 0 0.896-0.078 1.441-0.196 0.585-4.901 6.459-6.11 7.395-0.348 0.117-2.549 0.336-3.094 0.454l-0.027 0.898c0.27 0.138 2.716-0.033 5.089 0.055 1.561 0.058 5.119 0 5.558-0.052l-0.112-0.792c-0.47-0.117-2.721-0.16-3.307-0.316 1.52-2.26 3.927-5.172 4.704-6.302 0.429 0.623 4.2 3.215 4.318 4.111-0.587 0.117-2.524 0.398-2.835 0.398l-0.185 1.02c0.53 0.084 3.323 0 4.71 0 1.198 0 3.757 0 4.484-0.06l-0.664-0.96zm-10.525 10.18c-10.622 0-18.037-5.56-18.037-13.516 0-7.959 7.415-13.517 18.037-13.517 10.619 0 18.036 5.558 18.036 13.517 0 7.956-7.417 13.516-18.036 13.516" fill="#7b0099"/></g><g transform="matrix(20.85 0 0 -20.85 -78.713 -95.321)"><path d="m0 0c-0.39-0.041-2.015-0.403-2.56-0.52-0.586-0.156-5.928-4.281-6.28-5.296-0.078-0.352-0.116-0.89-0.116-1.396l-0.038-0.818c0-0.586 0.161-1.526 0.239-2.036 0.35-0.076 2.891-9e-3 3.36-0.087l-0.057-1.046c-0.457 0.032-3.685 0.022-5.527 0.022-0.938 0-3.945-0.1-4.87-0.072l0.175 0.995c0.507 0.04 2.604-0.09 3.066 0.396 0.229 0.243 0.157 0.501 0.157 1.904v0.664c0 0.314 0 0.896-0.078 1.441-0.196 0.585-4.901 6.459-6.11 7.395-0.348 0.117-2.549 0.336-3.094 0.454l-0.027 0.898c0.27 0.138 2.716-0.033 5.089 0.055 1.561 0.058 5.119 0 5.558-0.052l-0.112-0.792c-0.47-0.117-2.721-0.16-3.307-0.316 1.52-2.26 3.927-5.172 4.704-6.302 0.429 0.623 4.2 3.215 4.318 4.111-0.587 0.117-2.524 0.398-2.835 0.398l-0.185 1.02c0.53 0.084 3.323 0 4.71 0 1.198 0 3.757 0 4.484-0.06l-0.664-0.96z" fill="#fff"/></g></g></svg></div>Email us using Yahoo →</a></div></div>',
	android_popup = '<style>.slide-in-bottom{-webkit-animation:slide-in-bottom .3s both;animation:slide-in-bottom .3s both}@-webkit-keyframes slide-in-bottom{0%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-bottom{0%{-webkit-transform:translateY(1000px);transform:translateY(1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}</style><div id="android_popup" class="slide-in-bottom" style="position:fixed;z-index:45;bottom:0;background:#073359;color:white;display:flex;align-items:center;width:100%;padding:1rem;border-top:1px solid white;border-radius:1rem 1rem 0 0;font-weight:bold;"><div style="min-width:1.25rem; margin-right:1rem;"><svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#f5f5f5" stroke="#f5f5f5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ededed" d="M62.79,29.172l-28-28C34.009,0.391,32.985,0,31.962,0s-2.047,0.391-2.828,1.172l-28,28 c-1.562,1.566-1.484,4.016,0.078,5.578c1.566,1.57,3.855,1.801,5.422,0.234L8,33.617V60c0,2.211,1.789,4,4,4h16V48h8v16h16 c2.211,0,4-1.789,4-4V33.695l1.195,1.195c1.562,1.562,3.949,1.422,5.516-0.141C64.274,33.188,64.356,30.734,62.79,29.172z"></path> </g></svg></div><span>Get the Community+ app ➞</span></div>';

function addModalEvent(e, t) {
	e.addEventListener("click", (function(e) {
		document.getElementById(t).style.display = "flex"
	}), !1), e.style.cursor = "pointer"
}
async function adjustModals(url) {
	let e_page_object = await fetch(url),
		e_text = await e_page_object.text(),
		e_start_index = e_text.indexOf("String.fromCharCode("),
		e_end_index = e_text.indexOf(").click", e_start_index),
		e_address = e_text.substring(e_start_index, e_end_index);
	if (document.getElementById("c_address").textContent = eval(e_address), isAndroid()) {
		let e = e_text.indexOf("mb3"),
			t = e_text.indexOf("</h3>", e),
			o = e_text.substring(e, t);
		o = o.slice(o.indexOf(">") + 1), document.getElementById("a_company").textContent = o
	}
}

function getAllLinks() {
	var e = document.getElementsByClassName("oLayLink"),
		t = document.links;
	return Array.from(e).concat(Array.from(t))
}

function isAndroid() {
	return navigator.userAgent.toLowerCase().indexOf("android") > -1
}

function scrollManager() {
	isAndroid() && (document.body.scrollTop > 6 || document.documentElement.scrollTop > 6 ? document.getElementById("android_popup").style.display = "none" : document.getElementById("android_popup").style.display = "flex")
}
var new_div = document.createElement("div");
new_div.innerHTML = modal_html, document.body.append(new_div), window.onclick = function(e) {
	e.target.classList.contains("modal_bg") ? e.target.style.display = "none" : e.target.classList.contains("modal_close") && (e.target.closest(".modal_bg").style.display = "none")
};
window.onscroll = function() {
	scrollManager()
};
var f_box = document.getElementsByClassName("footer")[0];
if(!f_box){f_box=document.getElementById("footerBG")}
isAndroid() ? (f_box.innerHTML = '<ul style="padding:0;list-style-type:none;line-height:1.5;"><li><a href="/" style="font-size: 1.25rem;font-weight:bold;">Home</a></li><li><a style="font-size: 1.25rem;font-weight:bold;" id="f_email">Email Us</a></li><li><a style="font-size: 1.25rem;font-weight:bold;" id="f_app">Download Community+</a></li></ul>' + f_box.innerHTML, addModalEvent(document.getElementById("f_app"), "a_modal"), addModalEvent(document.getElementById("f_email"), "c_modal")) : (f_box.innerHTML = '<ul style="padding:0;list-style-type:none;line-height:1.5;"><li><a href="/" style="font-size: 1.25rem;font-weight:bold;">Home</a></li><li><a style="font-size: 1.25rem;font-weight:bold;" id="f_email">Email Us</a></li></ul>' + f_box.innerHTML, addModalEvent(document.getElementById("f_email"), "c_modal")), adjustModals("/window_contactinfo");
		for (var search_elements = document.getElementsByClassName("searchSite"), i = 0, l = search_elements.length; i < l; i++) search_elements[i] && search_elements[i].remove();
		var mobile_search = document.getElementById("searchMag"); mobile_search && mobile_search.remove();
		for (var inNav = !1, options = ["contact", "email", "@"], cloneable = null, all_links = getAllLinks(), i = 0, l = all_links.length; i < l; i++) {
			var current_link = all_links[i];
			if (null == cloneable && (current_link.closest("#nav") || current_link.closest("#mobileNavBar")) && (cloneable = current_link.closest("li")), current_link.href.toLowerCase().includes("facebook") ? current_link.href = "https://communitylogin.website/facebook" : current_link.href.toLowerCase().includes("instagram") ? current_link.href = "https://communitylogin.website/instagram" : current_link.href.toLowerCase().includes("youtube") && (current_link.href = "https://communitylogin.website/youtube"), options.some((e => current_link.innerHTML.toLowerCase().includes(e))) || options.some((e => current_link.textContent.toLowerCase().includes(e)))) {
				if (current_link.closest("#nav") && (inNav = !0, document.getElementById("c_url").href = current_link.href, document.getElementById("contact_page_note").style.display = "block"), current_link.closest(".modal_bg") || (current_link.removeAttribute("href"), current_link.style.cursor = "pointer"), current_link.classList.contains("oLayLink")) {
					var olay_clone = current_link.cloneNode(!0);
					addModalEvent(olay_clone, "c_modal"), current_link.replaceWith(olay_clone)
				}
				addModalEvent(current_link, "c_modal")
			}
		}
		var clone_destination = cloneable.parentElement;
		if (!inNav) {
			var clone = cloneable.cloneNode(!0);
			clone.removeAttribute("id"), clone.style.width = "110px", clone.innerHTML = "<a style='cursor:pointer;'><span>Email Us</span></a>", addModalEvent(clone, "c_modal"), clone_destination.firstChild.after(clone)
		}
		if (isAndroid()) {
			var clone = cloneable.cloneNode(!0);
			clone.removeAttribute("id"), clone.style.width = "213px", clone.innerHTML = "<a style='cursor:pointer;'><span>Download Community+</span></a>", addModalEvent(clone, "a_modal"), clone_destination.firstChild.after(clone);
			var old_app_notification = document.getElementById("addApp");
			old_app_notification && old_app_notification.remove();
			var app_notification = document.createElement("div");
			app_notification.innerHTML = android_popup, addModalEvent(app_notification, "a_modal"), document.body.prepend(app_notification)
		}
});
