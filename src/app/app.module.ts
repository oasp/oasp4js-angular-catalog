import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';

// Main Covalent Modules imports
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule, CovalentExpansionPanelModule
} from '@covalent/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

// Material Design
import { MdCheckboxModule, MdCardModule, MdInputModule, MdSelectModule, MdDatepickerModule, MdButtonModule} from '@angular/material';
import { MdSidenavModule, MdGridListModule, MaterialModule, MdNativeDateModule} from '@angular/material';
import {
  MdIconModule,
  MdListModule, MdMenuModule, MdTooltipModule,
  MdSlideToggleModule, MdToolbarModule, MdSnackBarModule,
  MdTabsModule,
} from '@angular/material';

//Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//PrimeNG
import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
import {MenuItem} from 'primeng/primeng';            //api

// Custom Components
import { FooterComponent } from './footer/footer.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { UsedTechnologiesComponent } from './used-technologies/used-technologies.component';
import { SliderComponent } from './slider/slider.component';
import { MarkdownModule } from 'angular2-markdown';
import { HeaderComponent } from './header/header.component';
import { MaterialDesignComponent } from './material-design/material-design.component';
import { MdInputComponent } from './material-design/form-control/md-input.component';
import { CheckboxComponent } from './material-design/form-control/checkbox/checkbox.component';
import { InputTextAreaComponent } from './material-design/form-control/input-text-area/input-text-area.component';
import { DropdownComponent } from './material-design/form-control/dropdown/dropdown.component';
import { PasswordComponent } from './material-design/form-control/password/password.component';
import { BasicCalenderComponent } from './material-design/form-control/basic-calender/basic-calender.component';
import { ButtonComponent } from './material-design/button/button.component';
import { SidenavComponent } from './material-design/sidenav/sidenav.component';
import { DatatableComponent } from './material-design/datatable/datatable.component';
import { AngularCompListComponent } from './angular-comp-list/angular-comp-list.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PrimengComponent } from './primeng/primeng.component';
import { MiscComponent } from './misc/misc.component';

import 'hammerjs';
import { NgBootstrapButtonComponent } from './bootstrap/ng-bootstrap-button/ng-bootstrap-button.component';
import { NgBootstrapFormControlComponent } from './bootstrap/ng-bootstrap-form-control/ng-bootstrap-form-control.component';
import { NgBootstrapDropdownComponent } from './bootstrap/ng-bootstrap-form-control/ng-bootstrap-dropdown/ng-bootstrap-dropdown.component';
import { NgBootstrapTooltipComponent } from './bootstrap/ng-bootstrap-form-control/ng-bootstrap-tooltip/ng-bootstrap-tooltip.component';
import { NgBootstrapDatepickerComponent } from './bootstrap/ng-bootstrap-form-control/ng-bootstrap-datepicker/ng-bootstrap-datepicker.component';
import { NgBootstrapCarouselComponent } from './bootstrap/ng-bootstrap-carousel/ng-bootstrap-carousel.component';
import { NgBootstrapTabsetComponent } from './bootstrap/ng-bootstrap-tabset/ng-bootstrap-tabset.component';

const ANGULAR_MODULES: any[] = [
  FormsModule, ReactiveFormsModule,
];

const MATERIAL_MODULES: any[] = [
  MdButtonModule, MdCardModule, MdIconModule,
  MdListModule, MdMenuModule, MdTooltipModule,
  MdSlideToggleModule, MdInputModule, MdCheckboxModule,
  MdToolbarModule, MdSnackBarModule, MdSidenavModule,
  MdTabsModule, MdSelectModule,
];

const COVALENT_MODULES: any[] = [
  CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
  CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
  CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
  CovalentCommonModule, CovalentDialogsModule,
];

//Routes
const routes: Routes = [
  { path: '', redirectTo: 'angular-comp-list', pathMatch: 'full' },
  { path: 'angular-comp-list', component: AngularCompListComponent },
  { path: 'MaterialDesign', component: MaterialDesignComponent },
  { path: 'Bootstrap', component: BootstrapComponent },
  { path: 'PrimeNG', component: PrimengComponent },
  { path: 'Misc', component: MiscComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TabPanelComponent,
    UsedTechnologiesComponent,
    SliderComponent,
    HeaderComponent,
    MaterialDesignComponent,
    MdInputComponent,
    CheckboxComponent,
    InputTextAreaComponent,
    DropdownComponent,
    PasswordComponent,
    BasicCalenderComponent,
    ButtonComponent,
    SidenavComponent,
    DatatableComponent,
    AngularCompListComponent,
    BootstrapComponent,
    PrimengComponent,
    MiscComponent,
    NgBootstrapButtonComponent,
    NgBootstrapFormControlComponent,
    NgBootstrapDropdownComponent,
    NgBootstrapTooltipComponent,
    NgBootstrapDatepickerComponent,
    NgBootstrapCarouselComponent,
    NgBootstrapTabsetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),

     /** Material Modules */
    MdCheckboxModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    MdDatepickerModule,
    MdIconModule,
    MdListModule,
    MdMenuModule,
    MdTooltipModule,
    MdSlideToggleModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdTabsModule,

    /** Covalent Modules */
   CovalentHttpModule,
   CovalentLayoutModule,
   CovalentExpansionPanelModule,
   CovalentNotificationsModule,
   CovalentMenuModule,
   CovalentMediaModule,
   CovalentHighlightModule,
   CovalentMarkdownModule,
   CovalentDynamicFormsModule,
   CovalentDataTableModule,
   CovalentLoadingModule,
   CovalentPagingModule,
   CovalentSearchModule,
   CovalentStepsModule,
   CovalentCommonModule,
   CovalentDialogsModule,
  ],
  exports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES,
    COVALENT_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
