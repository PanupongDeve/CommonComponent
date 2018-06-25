
import HOC from 'imports/HOC/hoc';
import DashBoard from '@imports/pages/DashBoard';
import DataExample from '@imports/pages/DataExample';

const indexRoutes = [
    { path: '/', name: 'Page3', component: DashBoard },
    { path: '/table', name: 'table', component:DataExample }
];

export default indexRoutes;