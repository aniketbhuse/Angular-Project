import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuraldirComponent } from './components/structuraldir/structuraldir.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './forms/template/template.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { GetApiComponent } from './apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './apiIntegration/post-api/post-api.component';
import { LifeCycleEventComponent } from './life-cycle-event/life-cycle-event.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { ViewchildComponent } from './viewchild/viewchild.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'structural-dir',
        component:StructuraldirComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    },
    {
        path: 'template',
        component:TemplateComponent
    },
    {
        path: 'reactive',
        component:ReactiveComponent
    },
    {
        path: 'get-api',
        component:GetApiComponent
    },
    {
        path:'post-api',
        component:PostApiComponent
    },
    {
        path:'life-cycle-event',
        component:LifeCycleEventComponent
    },
    {
        path:'ng-template',
        component:NgtemplateComponent
    },
    {
        path:'ng-container',
        component:NgcontainerComponent
    },
    {
        path:'view-child',
        component:ViewchildComponent
    }
];
