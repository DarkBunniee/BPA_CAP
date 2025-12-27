// namespace bpacap.db;

// using { cuid, managed } from '@sap/cds/common';

// entity PurchaseOrders : cuid, managed {
//     poid             : String(20);
//     pocode           : String(20);
//     potypes          : String(5);
//     pocategory       : String(50);
//     poquan           : Integer;
//     ponetamount      : Decimal(15,2);
//     poitem           : String(50);
//     podescripion     : String(255);
//     podeliverydate   : Date;
//     posubcategory    : String(50);

//     // BPA / Workflow Flags
//     is_active        : Boolean default false;
//     is_dbstatus      : Boolean default false;
//     is_changed       : Boolean default false;

//     Approver         : String(100);
//     Approver_status  : String(50);
// }


namespace bpacap.db;

using { cuid, managed } from '@sap/cds/common';

entity PurchaseOrders : cuid, managed {

    poid             : String(20);
    pocode           : String(20);
    potypes          : String(5);
    pocategory       : String(50);
    poquan           : Integer;
    ponetamount      : Decimal(15,2);
    poitem           : String(50);
    podescripion     : String(255);
    podeliverydate   : Date;
    posubcategory    : String(50);

    Approver         : String(100);
    Approver_status  : String(50);

    is_active        : Boolean default false;
    is_dbstatus      : Boolean default false;
    is_changed       : Boolean default false;

    workflowInstanceId : String;
}
