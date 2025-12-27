using BPACAPService as service from '../../srv/service';
annotate service.PurchaseOrders with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'poid',
                Value : poid,
            },
            {
                $Type : 'UI.DataField',
                Label : 'pocode',
                Value : pocode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'potypes',
                Value : potypes,
            },
            {
                $Type : 'UI.DataField',
                Label : 'pocategory',
                Value : pocategory,
            },
            {
                $Type : 'UI.DataField',
                Label : 'poquan',
                Value : poquan,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ponetamount',
                Value : ponetamount,
            },
            {
                $Type : 'UI.DataField',
                Label : 'poitem',
                Value : poitem,
            },
            {
                $Type : 'UI.DataField',
                Label : 'podescripion',
                Value : podescripion,
            },
            {
                $Type : 'UI.DataField',
                Label : 'podeliverydate',
                Value : podeliverydate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'posubcategory',
                Value : posubcategory,
            },
            {
                $Type : 'UI.DataField',
                Label : 'is_active',
                Value : is_active,
            },
            {
                $Type : 'UI.DataField',
                Label : 'is_dbstatus',
                Value : is_dbstatus,
            },
            {
                $Type : 'UI.DataField',
                Label : 'is_changed',
                Value : is_changed,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Approver',
                Value : Approver,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Approver_status',
                Value : Approver_status,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'poid',
            Value : poid,
        },
        {
            $Type : 'UI.DataField',
            Label : 'pocode',
            Value : pocode,
        },
        {
            $Type : 'UI.DataField',
            Label : 'potypes',
            Value : potypes,
        },
        {
            $Type : 'UI.DataField',
            Label : 'pocategory',
            Value : pocategory,
        },
        {
            $Type : 'UI.DataField',
            Label : 'poquan',
            Value : poquan,
        },
    ],
);

