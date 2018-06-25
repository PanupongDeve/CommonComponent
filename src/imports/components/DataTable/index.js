import React from 'react'
import {DataTable} from 'react-data-components';

var columns = [
    {
        title: 'Name',
        prop: 'name'
    }, {
        title: 'City',
        prop: 'city'
    }, {
        title: 'Address',
        prop: 'address'
    }, {
        title: 'Phone',
        prop: 'phone'
    }
];

var data = [
    {
        name: 'name value',
        city: 'city value',
        address: 'address value',
        phone: 'phone value'
    }
    // It also supports arrays [ 'name value', 'city value', 'address value', 'phone
    // value' ]
];

 const DataTableTest = () => {
    return <DataTable
        keys="name"
        columns={columns}
        initialData={data}
        initialPageLength={5}
        initialSortBy={{
        prop: 'city',
        order: 'descending'
    }}/>
}

export default DataTableTest;