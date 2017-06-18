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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

// Custom Components
import { OASPComponent } from './oasp/oasp.component';
import { OASP4JComponent } from './oasp4-j/oasp4-j.component';
import { OASP4JSComponent } from './oasp4-js/oasp4-js.component';
import { OASP4NETComponent } from './oasp4-net/oasp4-net.component';
import { MoreComponent } from './more/more.component';
import { FooterComponent } from './footer/footer.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { UsedTechnologiesComponent } from './used-technologies/used-technologies.component';
import { CollaborationContributionComponent } from './collaboration-contribution/collaboration-contribution.component';
import { TryItComponent } from './try-it/try-it.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { FrameworkComponent } from './framework/framework.component';
import { DevonfwComponent } from './devonfw/devonfw.component';
import { UniversityActivitiesComponent } from './university-activities/university-activities.component';
import { SliderComponent } from './slider/slider.component';
import { MarkdownModule } from 'angular2-markdown';
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';
import { NgbModalCollaborationComponent } from './ngb-modal-collaboration/ngb-modal-collaboration.component';
import { Oasp4FnComponent } from './oasp4-fn/oasp4-fn.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'oasp', pathMatch: 'full' },
  { path: 'oasp', component: OASPComponent },
  { path: 'MaterialDesign', component: MaterialDesignComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OASPComponent,
    OASP4JComponent,
    OASP4JSComponent,
    OASP4NETComponent,
    MoreComponent,
    FooterComponent,
    TabPanelComponent,
    UsedTechnologiesComponent,
    CollaborationContributionComponent,
    TryItComponent,
    GettingStartedComponent,
    FrameworkComponent,
    DevonfwComponent,
    UniversityActivitiesComponent,
    SliderComponent,
    NgbModalComponent,
    NgbModalCollaborationComponent,
    Oasp4FnComponent,
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
export class AppModule { }
