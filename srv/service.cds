// using bpacap.db as db from '../db/schema';

// service BPACAPService {

//     @odata.draft.enabled
//     entity PurchaseOrders
//         as projection on db.PurchaseOrders;

//     action submitPO(
//         podata      : PurchaseOrders
//     ) returns PurchaseOrders;
// }


//  BEST VERSION

// using bpacap.db as db from '../db/schema';

// service BPACAPService {

//     @odata.draft.enabled
//     entity PurchaseOrders
//         as projection on db.PurchaseOrders;

//     /**
//      * Simple PO submission (DB only)
//      * Can be used without BPA
//      */
//     action submitPO(
//         podata : PurchaseOrders
//     ) returns PurchaseOrders;

//     /**
//      * Trigger SAP BPA Workflow
//      * Used by test.http / API trigger
//      */
//     action triggerBPA(
//         podata : PurchaseOrders
//     ) returns {
//         message             : String;
//         workflowInstanceId  : String;
//         poid                : String;
//     };
// }



using bpacap.db as db from '../db/schema';

service BPACAPService {

    @odata.draft.enabled
    entity PurchaseOrders
        as projection on db.PurchaseOrders;

}

