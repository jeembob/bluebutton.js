/**
 * BlueButton.js
 */

// v.0.0.6


(function () {
var Core=function(){var f=function(b){return{el:b,template:Core.template,tag:Core.tag,elsByTag:Core.elsByTag,attr:Core.attr,val:Core.val}},g=function(b){if(b.length){for(var a=[],c=0;c<b.length;c++)a.push(f(b[c]));return a}return f(b)},e=function(){var b=document.createElement("empty");return g(b)};return{parseXML:function(b){if(!b||"string"!==typeof b)return console.log("BB Error: XML data is not a string"),null;var a;if(window.DOMParser)parser=new DOMParser,a=parser.parseFromString(b,"text/xml");
else try{a=new ActiveXObject("Microsoft.XMLDOM"),a.async="false",a.loadXML(b)}catch(c){console.log("BB ActiveX Exception: Could not parse XML")}return!a||!a.documentElement||a.getElementsByTagName("parsererror").length?(console.log("BB Error: Could not parse XML"),null):g(a)},wrapElement:g,template:function(b){a:{for(var a=this.el,a=a.getElementsByTagName("templateId"),c=0;c<a.length;c++)if(a[c].getAttribute("root")===b){b=a[c];break a}b=void 0}return b?g(b.parentNode):e()},tag:function(b){return(b=
this.el.getElementsByTagName(b)[0])?g(b):e()},elsByTag:function(b){return g(this.el.getElementsByTagName(b))},attr:function(b){return!this.el?null:this.el.getAttribute(b)},val:function(){if(!this.el)return null;try{return this.el.childNodes[0].nodeValue}catch(b){return null}},parseDate:function(b){if(!b||"string"!==typeof b)return console.log("Error: date is not a string"),null;var a=b.substr(0,4),c=b.substr(4,2);b=b.substr(6,2);return new Date(a,c,b)}}}();var Allergies=function(){return{process:function(f,g){var e;switch(g){case "ccda":e=[];var b,a,c;b=f.template("2.16.840.1.113883.10.20.22.2.6.1");a=b.elsByTag("entry");for(var d=0;d<a.length;d++){c=a[d];b=c.template("2.16.840.1.113883.10.20.22.4.7").tag("code");var h=b.attr("displayName"),k=b.attr("code"),l=b.attr("codeSystem"),n=b.attr("codeSystemName");b=c.template("2.16.840.1.113883.10.20.22.4.7").tag("value");var m=b.attr("displayName"),p=b.attr("code");b.attr("codeSystem");var q=b.attr("codeSystemName");
b=c.template("2.16.840.1.113883.10.20.22.4.9").tag("value");var r=b.attr("displayName"),s=b.attr("code"),t=b.attr("codeSystem");b=c.template("2.16.840.1.113883.10.20.22.4.8").tag("value");var u=b.attr("displayName");b=c.tag("participant").tag("code");var v=b.attr("displayName"),w=b.attr("code"),x=b.attr("codeSystem"),y=b.attr("codeSystemName");b=c.template("2.16.840.1.113883.10.20.22.4.28").tag("value");b=b.attr("displayName");e.push({date:{value:null,low:null,high:null},observation_date:{low:null},
name:h,code:k,code_system:l,code_system_name:n,status:b,severity:u,reaction:{date:{low:null},name:r,code:s,code_system:t},reaction_type:{name:m,code:p,code_system:t,code_system_name:q},allergen:{name:v,code:w,code_system:x,code_system_name:y}})}break;case "va_c32":e=[];b=f.template("2.16.840.1.113883.3.88.11.83.102");a=b.elsByTag("entry");for(d=0;d<a.length;d++)c=a[d],b=c.template("2.16.840.1.113883.10.20.22.4.7").tag("code"),h=b.attr("displayName"),k=b.attr("code"),l=b.attr("codeSystem"),n=b.attr("codeSystemName"),
b=c.template("2.16.840.1.113883.10.20.22.4.7").tag("value"),m=b.attr("displayName"),p=b.attr("code"),b.attr("codeSystem"),q=b.attr("codeSystemName"),b=c.template("2.16.840.1.113883.10.20.1.54").tag("value"),r=b.attr("displayName"),s=b.attr("code"),t=b.attr("codeSystem"),b=c.template("2.16.840.1.113883.10.20.22.4.8").tag("value"),u=b.attr("displayName"),b=c.tag("participant").tag("code"),v=b.attr("displayName"),w=b.attr("code"),x=b.attr("codeSystem"),y=b.attr("codeSystemName"),b=c.template("2.16.840.1.113883.10.20.22.4.28").tag("value"),
b=b.attr("displayName"),e.push({date:{value:null,low:null,high:null},observation_date:{low:null},name:h,code:k,code_system:l,code_system_name:n,status:b,severity:u,reaction:{date:{low:null},name:r,code:s,code_system:t},reaction_type:{name:m,code:p,code_system:t,code_system_name:q},allergen:{name:v,code:w,code_system:x,code_system_name:y}})}return e}}}();var Demographics=function(){var f=Core.parseDate;return{process:function(g,e){var b;switch(e){case "ccda":b={};var a,c;a=g.template("2.16.840.1.113883.10.20.22.1.1");c=a.tag("patientRole");a=c.tag("patient").tag("name");b.prefix=a.tag("prefix").val();b.given=a.tag("given").val();b.family=a.tag("family").val();a=c.tag("patient");b.dob=f(a.tag("birthTime").attr("value"));b.gender=a.tag("administrativeGenderCode").attr("displayName");b.marital_status=a.tag("maritalStatusCode").attr("displayName");a=
c.tag("addr");b.street=a.tag("streetAddressLine").val();b.city=a.tag("city").val();b.state=a.tag("state").val();b.zip=a.tag("postalCode").val();b.country=a.tag("country").val();a=c.tag("telecom");b.home=a.attr("value");b.work=null;b.mobile=null;b.email=null;b.race=c.tag("raceCode").attr("displayName");b.ethnicity=c.tag("ethnicGroupCode").attr("displayName");b.religion=c.tag("religiousAffiliationCode").attr("displayName");a=c.tag("birthplace");b.birthplace_state=a.tag("state").val();b.birthplace_zip=
a.tag("postalCode").val();b.birthplace_country=a.tag("country").val();a=c.tag("guardian");b.guardian_relationship=a.tag("code").attr("displayName");b.guardian_home=a.tag("telecom").attr("value");a=a.tag("guardianPerson");b.guardian_given=a.tag("given").val();b.guardian_family=a.tag("family").val();a=c.tag("guardian").tag("addr");b.guardian_street=a.tag("streetAddressLine").val();b.guardian_city=a.tag("city").val();b.guardian_state=a.tag("state").val();b.guardian_zip=a.tag("postalCode").val();b.guardian_country=
a.tag("country").val();a=c.tag("providerOrganization");b.provider_organization=a.tag("name").val();b.provider_phone=a.tag("telecom").attr("value");b.provider_street=a.tag("streetAddressLine").val();b.provider_city=a.tag("city").val();b.provider_state=a.tag("state").val();b.provider_zip=a.tag("postalCode").val();b.provider_country=a.tag("country").val();break;case "va_c32":b=void 0}return{name:{prefix:b.prefix,given:b.given,family:b.family},dob:b.dob,gender:b.gender,marital_status:b.marital_status,
address:{street:b.street,city:b.city,state:b.state,zip:b.zip,country:b.country},phone:{home:b.home,work:b.work,mobile:b.mobile},email:b.email,race:b.race,ethnicity:b.ethnicity,religion:b.religion,birthplace:{state:b.birthplace_state,zip:b.birthplace_zip,country:b.birthplace_country},guardian:{name:{given:b.guardian_given,family:b.guardian_family},relationship:b.guardian_relationship,address:{street:b.guardian_street,city:b.guardian_city,state:b.guardian_state,zip:b.guardian_zip,country:b.guardian_country},
phone:{home:b.guardian_home}},provider:{organization:b.provider_organization,phone:b.provider_phone,address:{street:b.provider_street,city:b.provider_city,state:b.provider_state,zip:b.provider_zip,country:b.provider_country}}}}}}();var Encounters=function(){var f=Core.parseDate;return{process:function(g,e){var b=[],a,c,d;a=g.template("ccda"==e?"2.16.840.1.113883.10.20.22.2.22.1":"2.16.840.1.113883.10.20.1.3");c=a.elsByTag("entry");for(var h=0;h<c.length;h++){d=c[h];var k=f(d.tag("effectiveTime").attr("value"));a=d.tag("code");var l=a.attr("displayName"),n=a.attr("code"),m=a.attr("codeSystem"),p=a.attr("codeSystemName"),q=a.attr("codeSystemVersion");a=d.tag("value");var r=a.attr("displayName"),s=a.attr("code"),t=a.attr("codeSystem");
a=d.tag("translation");var u=a.attr("displayName"),v=a.attr("code"),w=a.attr("codeSystem"),x=a.attr("codeSystemName");a=d.tag("performer").tag("code");var y=a.attr("displayName"),z=a.attr("code"),A=a.attr("codeSystem"),B=a.attr("codeSystemName");a=d.tag("participant");d=a.tag("code").attr("displayName");var C=a.tag("streetAddressLine").val(),D=a.tag("city").val(),E=a.tag("state").val(),F=a.tag("postalCode").val();a=a.tag("country").val();b.push({date:k,name:l,code:n,code_system:m,code_system_name:p,
code_system_version:q,finding:{name:r,code:s,code_system:t},translation:{name:u,code:v,code_system:w,code_system_name:x},performer:{name:y,code:z,code_system:A,code_system_name:B},location:{organization:d,street:C,city:D,state:E,zip:F,country:a}})}return b}}}();var Immunizations=function(){var f=Core.parseDate;return{process:function(g,e){var b=[],a,c,d;a=g.template("ccda"==e?"2.16.840.1.113883.10.20.22.2.2":"2.16.840.1.113883.10.20.1.6");c=a.elsByTag("entry");for(var h=0;h<c.length;h++){d=c[h];a=d.tag("effectiveTime");var k=f(a.attr("value"));a=d.template("2.16.840.1.113883.10.20.22.4.54").tag("code");var l=a.attr("displayName"),n=a.attr("code"),m=a.attr("codeSystem"),p=a.attr("codeSystemName");a=d.template("2.16.840.1.113883.10.20.22.4.54").tag("translation");
var q=a.attr("displayName"),r=a.attr("code"),s=a.attr("codeSystem"),t=a.attr("codeSystemName");a=d.tag("routeCode");var u=a.attr("displayName"),v=a.attr("code"),w=a.attr("codeSystem"),x=a.attr("codeSystemName");a=d.template("2.16.840.1.113883.10.20.22.4.20");d=a.tag("text").val();a=a.tag("code");var y=a.attr("displayName"),z=a.attr("code");a=a.attr("codeSystem");b.push({date:k,product:{name:l,code:n,code_system:m,code_system_name:p,translation:{name:q,code:r,code_system:s,code_system_name:t}},route:{name:u,
code:v,code_system:w,code_system_name:x},instructions:d,education_type:{name:y,code:z,code_system:a}})}return b}}}();var Labs=function(){var f=Core.parseDate;return{process:function(g,e){var b=[],a=[],c,d,h,k;c=g.template("ccda"==e?"2.16.840.1.113883.10.20.22.2.3.1":"2.16.840.1.113883.10.20.1.14");d=c.elsByTag("entry");for(var l=0;l<d.length;l++){h=d[l];c=h.tag("code");var n=c.attr("displayName"),m=c.attr("code"),p=c.attr("codeSystem"),q=c.attr("codeSystemName");h=h.elsByTag("component");for(var r=0;r<h.length;r++){k=h[r];var s=f(k.tag("effectiveTime").attr("value"));c=k.tag("code");n=c.attr("displayName");m=c.attr("code");
p=c.attr("codeSystem");q=c.attr("codeSystemName");c=k.tag("value");k=c.attr("value");c=c.attr("unit");reference_high=reference_low=null;a.push({date:s,name:n,value:k,unit:c,code:m,code_system:p,code_system_name:q,reference:{low:reference_low,high:reference_high}})}b.push({name:n,code:m,code_system:p,code_system_name:q,results:a})}return b}}}();var Medications=function(){var f=Core.parseDate;return{process:function(g,e){var b=[],a,c,d;a=g.template("ccda"==e?"2.16.840.1.113883.10.20.22.2.1.1":"2.16.840.1.113883.3.88.11.83.112");c=a.elsByTag("entry");for(var h=0;h<c.length;h++){d=c[h];a=d.tag("effectiveTime");var k=f(a.tag("low").attr("value")),l=f(a.tag("high").attr("value"));a=d.tag("manufacturedProduct").tag("code");var n=a.attr("displayName"),m=a.attr("code"),p=a.attr("codeSystem");a=d.tag("manufacturedProduct").tag("translation");var q=
a.attr("displayName"),r=a.attr("code"),s=a.attr("codeSystem"),t=a.attr("codeSystemName");a=d.tag("doseQuantity");var u=a.attr("value"),v=a.attr("unit");a=d.tag("rateQuantity");var w=a.attr("value"),x=a.attr("unit");a=d.tag("precondition").tag("value");var y=a.attr("displayName"),z=a.attr("code"),A=a.attr("codeSystem");a=d.template("2.16.840.1.113883.10.20.22.4.19").tag("value");var B=a.attr("displayName"),C=a.attr("code"),D=a.attr("codeSystem");a=d.tag("routeCode");var E=a.attr("displayName"),F=a.attr("code"),
G=a.attr("codeSystem"),H=a.attr("codeSystemName");a=d.tag("participant").tag("code");var I=a.attr("displayName"),J=a.attr("code"),K=a.attr("codeSystem"),L=a.attr("codeSystemName");a=d.tag("administrationUnitCode");var M=a.attr("displayName"),N=a.attr("code"),O=a.attr("codeSystem"),P=a.attr("codeSystemName");a=d.tag("performer");a=a.tag("name").val();b.push({effective_time:{low:k,high:l},product:{name:n,code:m,code_system:p,translation:{name:q,code:r,code_system:s,code_system_name:t}},dose_quantity:{value:u,
unit:v},rate_quantity:{value:w,unit:x},precondition:{name:y,code:z,code_system:A},reason:{name:B,code:C,code_system:D},route:{name:E,code:F,code_system:G,code_system_name:H},vehicle:{name:I,code:J,code_system:K,code_system_name:L},administration:{name:M,code:N,code_system:O,code_system_name:P},prescriber:{organization:a,person:null}})}return b}}}();var Problems=function(){var f=Core.parseDate;return{process:function(g,e){var b=[],a,c,d;a=g.template("ccda"==e?"2.16.840.1.113883.10.20.22.2.5":"2.16.840.1.113883.10.20.1.11");c=a.elsByTag("entry");for(var h=0;h<c.length;h++){d=c[h];a=d.tag("effectiveTime");var k=f(a.tag("low").attr("value")),l=f(a.tag("high").attr("value"));a=d.template("2.16.840.1.113883.10.20.22.4.4").tag("code");var n=a.attr("displayName"),m=a.attr("code"),p=a.attr("codeSystem");a=d.template("2.16.840.1.113883.10.20.22.4.6");
var q=a.tag("value").attr("displayName");a=d.template("2.16.840.1.113883.10.20.22.4.31");a=parseInt(a.tag("value").attr("value"));b.push({date:{from:k,to:l},name:n,status:q,age:a,code:m,code_system:p})}return b}}}();var Procedures=function(){var f=Core.parseDate;return{process:function(g,e){var b=[],a,c,d;a=g.template("ccda"==e?"2.16.840.1.113883.10.20.22.2.7":"2.16.840.1.113883.10.20.1.12");c=a.elsByTag("entry");for(var h=0;h<c.length;h++){d=c[h];a=d.tag("effectiveTime");var k=f(a.attr("value"));a=d.tag("code");var l=a.attr("displayName"),n=a.attr("code"),m=a.attr("codeSystem");specimen_code_system=specimen_code=specimen_name=null;a=d.tag("performer");var p=a.tag("name").val(),q=a.tag("telecom").attr("value"),
r=a.tag("streetAddressLine").val(),s=a.tag("city").val(),t=a.tag("state").val(),u=a.tag("postalCode").val(),v=a.tag("country").val();a=d.tag("participant").tag("code");d=a.attr("displayName");var w=a.attr("code");a=a.attr("codeSystem");b.push({date:k,name:l,code:n,code_system:m,specimen:{name:specimen_name,code:specimen_code,code_system:specimen_code_system},performer:{organization:p,street:r,city:s,state:t,zip:u,country:v,phone:q},device:{name:d,code:w,code_system:a}})}return b}}}();var Vitals=function(){var f=Core.parseDate;return{process:function(g,e){var b=[],a=[],c,d,h,k;c=g.template("ccda"==e?"2.16.840.1.113883.10.20.22.2.4.1":"2.16.840.1.113883.10.20.1.16");d=c.elsByTag("entry");for(var l=0;l<d.length;l++){h=d[l];c=h.tag("effectiveTime");var n=f(c.attr("value"));h=h.elsByTag("component");for(var m=0;m<h.length;m++){k=h[m];c=k.tag("code");var p=c.attr("displayName"),q=c.attr("code"),r=c.attr("codeSystem"),s=c.attr("codeSystemName");c=k.tag("value");k=c.attr("value");c=c.attr("unit");
a.push({name:p,code:q,code_system:r,code_system_name:s,value:k,unit:c})}b.push({date:n,results:a})}return b}}}();var BlueButton=function(f){var g=null,e={},b=function(a){for(var b=0;b<a.length;b++)a[b].json=function(){return JSON.stringify(this,null,2)}};f=f.replace(/^\s+|\s+$/g,"");"<?xml"==f.substr(0,5)?(g=Core.parseXML(f),f="empty"==g.template("1.3.6.1.4.1.19376.1.5.3.1.1.1").el.tagName.toLowerCase()?"ccda":"va_c32",e.document={type:f},e.allergies=Allergies.process(g,f),e.demographics=Demographics.process(g,f),e.encounters=Encounters.process(g,f),e.immunizations=Immunizations.process(g,f),e.labs=Labs.process(g,
f),e.medications=Medications.process(g,f),e.problems=Problems.process(g,f),e.procedures=Procedures.process(g,f),e.vitals=Vitals.process(g,f),b([e,e.document,e.allergies,e.demographics,e.encounters,e.immunizations,e.labs,e.medications,e.problems,e.procedures,e.vitals])):e=JSON.parse(f);return{data:e,xmlDOM:g,document:function(){return e.document},allergies:function(){return e.allergies},demographics:function(){return e.demographics},encounters:function(){return e.encounters},immunizations:function(){return e.immunizations},
labs:function(){return e.labs},medications:function(){return e.medications},problems:function(){return e.problems},procedures:function(){return e.procedures},vitals:function(){return e.vitals}}};window.BlueButton=BlueButton;
})();
