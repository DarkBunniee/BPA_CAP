// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function () {

//     const { PurchaseOrders } = this.entities;

//     /**
//      * BPA API Trigger Entry
//      * Used when BPA triggers this CAP service
//      */
//     this.on('submitPO', async (req) => {

//         const data = req.data.podata;

//         if (!data.poid) {
//             return req.error(400, 'PO ID is mandatory');
//         }

//         const result = await INSERT.into(PurchaseOrders).entries({
//             poid: data.poid,
//             pocode: data.pocode,
//             potypes: data.potypes,
//             pocategory: data.pocategory,
//             poquan: data.poquan,
//             ponetamount: data.ponetamount,
//             poitem: data.poitem,
//             podescripion: data.podescripion,
//             podeliverydate: data.podeliverydate,
//             posubcategory: data.posubcategory,

//             is_active: false,
//             is_dbstatus: false,
//             is_changed: false,

//             Approver: data.Approver,
//             Approver_status: data.Approver_status
//         });

//         return result;
//     });

// });



// const { cds } = require('@sap/cds');
// const bpa_destination = await cds.connect.to("sap_bpa");


// REFERENCE CODE 
// let payload = {
//     definitionId: "<myProcessID",
//     context: {
// StringName1 "InputString1",
// IntegerName2 SampleInteger >
// }
// };
// let oResult = await bpaService.tx(req).post('/v1/workflow-instances', payloa
// d);
// if (response.status! 201 
// throw new Error('Failed to trigger the process.');
// }


// --------------------------------------------------------------------------------------------------------

// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function () {

//     const { PurchaseOrders } = this.entities;

//     // Connect to BPA Destination
//     const bpaService = await cds.connect.to('sap_bpa');

//     /**
//      * Action: triggerBPA
//      * Trigger SAP BPA workflow from CAP
//      */
//     this.on('triggerBPA', async (req) => {

//         const podata = req.data.podata;

//         if (!podata?.poid) {
//             req.error(400, 'PO ID is mandatory');
//         }

//         // 1️⃣ Persist PO in DB
//         await INSERT.into(PurchaseOrders).entries({
//             poid: podata.poid,
//             pocode: podata.pocode,
//             potypes: podata.potypes,
//             pocategory: podata.pocategory,
//             poquan: podata.poquan,
//             ponetamount: podata.ponetamount,
//             poitem: podata.poitem,
//             podescripion: podata.podescripion,
//             podeliverydate: podata.podeliverydate,
//             posubcategory: podata.posubcategory,

//             is_active: true,
//             is_dbstatus: true,
//             is_changed: false,

//             Approver: podata.Approver,
//             Approver_status: 'SUBMITTED'
//         });

//         // 2️⃣ BPA Workflow Payload
//         const bpaPayload = {
//             definitionId: 'us10.36b6eb63trial.bpademo.bpacap',
//             context: {
//                 podata: podata,
//                 customdata: {
//                     is_active: true,
//                     is_dbstatus: true,
//                     is_changed: false,
//                     Approver: podata.Approver,
//                     Approver_status: 'SUBMITTED'
//                 }
//             }
//         };

//         // 3️⃣ Trigger BPA Process
//         const response = await bpaService.tx(req).post(
//             '/v1/workflow-instances',
//             bpaPayload
//         );

//         if (response.status !== 201) {
//             throw new Error('Failed to trigger BPA workflow');
//         }

//         return {
//             message: 'BPA Workflow Triggered Successfully',
//             workflowInstanceId: response.data.id,
//             poid: podata.poid
//         };
//     });
// });




// ---------------------------------------------------------------------------------------

//  v1
// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function () {

//     const { PurchaseOrders } = this.entities;

//     // Lazy connection (IMPORTANT)
//     let bpaService;

//     // Read from dotenv
//     const WORKFLOW_PATH = process.env.BPA_WORKFLOW_PATH;
//     const DEFINITION_ID = process.env.BPA_DEFINITION_ID;

//     /**
//      * Action: triggerBPA
//      * Persist PO + Trigger SAP BPA workflow
//      */
//     this.on('triggerBPA', async (req) => {

//         // Connect only when needed
//         if (!bpaService) {
//             bpaService = await cds.connect.to('sap_bpa');
//         }

//         const podata = req.data.podata;

//         if (!podata?.poid) {
//             req.error(400, 'PO ID is mandatory');
//         }

//         // 1️⃣ Persist PO in DB
//         await INSERT.into(PurchaseOrders).entries({
//             poid: podata.poid,
//             pocode: podata.pocode,
//             potypes: podata.potypes,
//             pocategory: podata.pocategory,
//             poquan: podata.poquan,
//             ponetamount: podata.ponetamount,
//             poitem: podata.poitem,
//             podescripion: podata.podescripion,
//             podeliverydate: podata.podeliverydate,
//             posubcategory: podata.posubcategory,

//             is_active: true,
//             is_dbstatus: true,
//             is_changed: false,

//             Approver: podata.Approver,
//             Approver_status: 'SUBMITTED'
//         });

//         // 2️⃣ BPA Workflow Payload
//         const bpaPayload = {
//             definitionId: DEFINITION_ID,
//             context: {
//                 podata,
//                 customdata: {
//                     is_active: true,
//                     is_dbstatus: true,
//                     is_changed: false,
//                     Approver: podata.Approver,
//                     Approver_status: 'SUBMITTED'
//                 }
//             }
//         };

//         // 3️⃣ Trigger BPA Workflow
//         const response = await bpaService.tx(req).post(
//             WORKFLOW_PATH,
//             bpaPayload
//         );

//         if (response.status !== 201) {
//             throw new Error('Failed to trigger BPA workflow');
//         }

//         return {
//             message: 'BPA Workflow Triggered Successfully',
//             workflowInstanceId: response.data.id,
//             poid: podata.poid
//         };
//     });
// });


// v2 
// require('dotenv').config();

// const cds = require('@sap/cds');
// const axios = require('axios');

// module.exports = cds.service.impl(async function () {

//     const { PurchaseOrders } = this.entities;

//     const BPA_URL =
//         'https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/workflow/rest/v1/workflow-instances';

//     const DEFINITION_ID = process.env.BPA_DEFINITION_ID;

//     /**
//      * Auto-trigger BPA using USER TOKEN (Trial-safe)
//      */
//     this.after('CREATE', PurchaseOrders, async (data, req) => {

//         // Draft safety
//         if (req.data?.IsActiveEntity === false) return;

//         // Prevent duplicate workflows
//         if (data.workflowInstanceId) return;

//         // Get USER JWT from request (THIS is the key)
//         const userJwt = req.headers?.authorization;
//         if (!userJwt) {
//             console.warn('No user JWT found – BPA not triggered');
//             return;
//         }

//         // Do not block draft activation
//         setImmediate(async () => {
//             try {
//                 const payload = {
//                     definitionId: DEFINITION_ID,
//                     context: {
//                         podata: {
//                             poid: data.poid,
//                             pocode: data.pocode,
//                             potypes: data.potypes,
//                             pocategory: data.pocategory,
//                             poquan: data.poquan,
//                             ponetamount: data.ponetamount,
//                             poitem: data.poitem,
//                             podescripion: data.podescripion,
//                             podeliverydate: data.podeliverydate,
//                             posubcategory: data.posubcategory,
//                             Approver: data.Approver,
//                             Approver_status: 'SUBMITTED'
//                         }
//                     }
//                 };

//                 const response = await axios.post(
//                     BPA_URL,
//                     payload,
//                     {
//                         headers: {
//                             Authorization: userJwt,
//                             'Content-Type': 'application/json'
//                         }
//                     }
//                 );

//                 // Store workflow instance ID
//                 await UPDATE(PurchaseOrders)
//                     .set({ workflowInstanceId: response.data.id })
//                     .where({ ID: data.ID });

//                 console.log('BPA workflow started:', response.data.id);

//             } catch (err) {
//                 console.error(
//                     'Async BPA trigger failed:',
//                     err.response?.data || err.message
//                 );
//             }
//         });
//     });
// });




// v3 


const cds = require('@sap/cds');
const axios = require('axios');
const { getAccessToken } = require('./libs/oauth');

module.exports = cds.service.impl(async function () {

    const { PurchaseOrders } = this.entities;

    this.after('CREATE', PurchaseOrders, async (data, req) => {

        // Draft safety
        if (req.data?.IsActiveEntity === false) return;
        if (data.workflowInstanceId) return;

        setImmediate(async () => {
            try {
                // 1️⃣ OAuth Token
                const token = await getAccessToken();

                // 2️⃣ BPA Payload (MATCHES SCHEMA 1:1)
                const payload = {
                    definitionId: process.env.BPA_DEFINITION_ID,
                    context: {
                        podata: {
                            poid: String(data.poid),
                            pocode: String(data.pocode),
                            potypes: String(data.potypes),
                            pocategory: String(data.pocategory),
                            poquan: Number(data.poquan),
                            ponetamount: Number(data.ponetamount),
                            poitem: String(data.poitem),

                            // ✅ FIXED TYPO
                            podescription: String(data.podescripion),

                            // ✅ DATE FORMAT FIX
                            podeliverydate: new Date(data.podeliverydate)
                                .toISOString()
                                .split('T')[0],

                            posubcategory: String(data.posubcategory)
                        },

                        // ✅ REQUIRED BY TRIGGER
                        customdata: {
                            is_active: Boolean(data.is_active),
                            is_dbstatus: Boolean(data.is_dbstatus),
                            is_changed: Boolean(data.is_changed),
                            Approver: data.Approver || '',
                            Approver_status: data.Approver_status || 'SUBMITTED'
                        }
                    }
                };

                // 3️⃣ Trigger BPA Workflow
                const response = await axios.post(
                    `${process.env.BPA_BASE_URL}${process.env.BPA_WORKFLOW_PATH}`,
                    payload,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );

                // 4️⃣ Persist workflow instance ID
                await UPDATE(PurchaseOrders)
                    .set({ workflowInstanceId: response.data.id })
                    .where({ ID: data.ID });

                console.log('BPA workflow started:', response.data.id);

            } catch (err) {
                console.error(
                    'BPA trigger failed:',
                    JSON.stringify(err.response?.data, null, 2)
                );
            }
        });
    });
});


