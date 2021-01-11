self.webpackChunkRemoteClient([25],{619:function(e,t,a){"use strict";a.r(t),a.d(t,"applyEdits",(function(){return h})),a.d(t,"isEditableLayer",(function(){return p}));var r=a(5),s=a(1),d=a(14),i=a(24),l=a(2),n=a(58),o=a(74),u=a(209);function p(e){var t,a;return!0===(null==e||null==(t=e.capabilities)||null==(a=t.operations)?void 0:a.supportsEditing)&&e&&(!("editingEnabled"in e)||e.editingEnabled)}async function h(e,t,a,s){let i,o;const p={edits:a,result:Object(l.c)((e,t)=>{i=e,o=t})};e.emit("apply-edits",p);try{const{results:o,edits:p}=await async function(e,t,a,r){if(await e.load(),!function(e){return e&&null!=e.applyEdits}(t))return Object(l.r)(new d.a(e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new d.a(e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});const s=await function(e,t,a){const r=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),s=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!r&&!s)throw new d.a(e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new d.a(e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new d.a(e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new d.a(e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&s)throw new d.a(e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&s)throw new d.a(e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const i={...t};if(i.addFeatures=t&&n.a.isCollection(t.addFeatures)?t.addFeatures.toArray():i.addFeatures||[],i.updateFeatures=t&&n.a.isCollection(t.updateFeatures)?t.updateFeatures.toArray():i.updateFeatures||[],i.deleteFeatures=t&&n.a.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():i.deleteFeatures||[],i.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new d.a(e.type+"-layer:unsupported-operation","Layer does not support adding features.");if(i.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new d.a(e.type+"-layer:unsupported-operation","Layer does not support updating features.");if(i.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new d.a(e.type+"-layer:unsupported-operation","Layer does not support deleting features.");i.addAttachments=i.addAttachments||[],i.updateAttachments=i.updateAttachments||[],i.deleteAttachments=i.deleteAttachments||[],i.addFeatures=i.addFeatures.map(m),i.updateFeatures=i.updateFeatures.map(m);const l=a&&a.globalIdUsed;return i.addFeatures.forEach(t=>c(t,e,l)),i.updateFeatures.forEach(t=>c(t,e,l)),i.deleteFeatures.forEach(t=>c(t,e,l)),i.addAttachments.forEach(t=>y(t,e)),i.updateAttachments.forEach(t=>y(t,e)),async function(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map(e=>e.geometry),s=await Object(u.a)(r),d=t.length,i=a.length;return s.slice(0,d).forEach((t,a)=>{e.addFeatures[a].geometry=t}),s.slice(d,d+i).forEach((t,a)=>{e.updateFeatures[a].geometry=t}),e}(i)}(e,a,r);return s.addFeatures.length||s.updateFeatures.length||s.deleteFeatures.length||s.addAttachments.length||s.updateAttachments.length||s.deleteAttachments.length?{edits:s,results:await t.applyEdits(s,r)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,s),h=e=>e.filter(e=>!e.error).map(r.a),b={edits:p,addedFeatures:h(o.addFeatureResults),updatedFeatures:h(o.updateFeatureResults),deletedFeatures:h(o.deleteFeatureResults),addedAttachments:h(o.addAttachmentResults),updatedAttachments:h(o.updateAttachmentResults),deletedAttachments:h(o.deleteAttachmentResults)};return(b.addedFeatures.length||b.updatedFeatures.length||b.deletedFeatures.length||b.addedAttachments.length||b.updatedAttachments.length||b.deletedAttachments.length)&&e.emit("edits",b),i(b),o}catch(e){throw o(e),e}}function c(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new d.a(t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new d.a(t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&Object(s.g)(e.geometry)){if(!t.capabilities.editing.supportsGeometryUpdate)throw new d.a(t.type+"-layer:unsupported-operation","Layer does not support geometry updates.");if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new d.a(t.type+"-layer:z-unsupported","Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new d.a(t.type+"-layer:m-unsupported","Layer does not support m values while feature has m values.")}}function y(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new d.a(t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new d.a(t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new d.a(t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new d.a(t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new d.a(t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new d.a(t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=Object(i.i)(r.data);if(e&&!e.isBase64)throw new d.a(t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}function m(e){const t=new o.a;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}});