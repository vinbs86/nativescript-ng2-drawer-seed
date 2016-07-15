import {ViewChild, OnInit, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {Observable} from 'data/observable';

import {RadSideDrawerComponent, SideDrawerType} from 'nativescript-telerik-ui/sidedrawer/angular';
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');

export class PageComponent extends Observable implements OnInit {

    @ViewChild(RadSideDrawerComponent) protected drawerComponent:RadSideDrawerComponent;
    protected drawer:SideDrawerType;

    constructor(protected changeDetectionRef:ChangeDetectorRef, protected router:Router, protected location:Location) {
        super();
    }

    ngOnInit() {
        this.drawerComponent.showOverNavigation = true;
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    }

    protected openDrawer() {
        this.drawer.showDrawer();
    }

    protected closeDrawer() {
        this.drawer.closeDrawer();
    }
}