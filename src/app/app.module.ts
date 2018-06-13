import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { RouterModule, Routes } from '@angular/router';

// Angular Material Components
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';

// Angular Fire
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Components
import { AppComponent } from './app.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { DatepickerComponent } from './pages/home/datepicker/datepicker.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { TextBlockComponent } from './pages/home/text-block/text-block.component';
import { ToolbarComponent } from './shared-components/toolbar/toolbar.component';
import { WhatsappContactComponent } from './shared-components/whatsapp-contact/whatsapp-contact.component';
import { PhotosSectionHomeOneComponent } from './pages/home/photos-section-home-one/photos-section-home-one.component';
import { PhotosSectionHomeTwoComponent } from './pages/home/photos-section-home-two/photos-section-home-two.component';
import { SidebarListComponent } from './shared-components/sidebar/sidebar-list/sidebar-list.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { FooterListComponent } from './shared-components/footer/footer-list/footer-list.component';
import { FooterSocialMediaComponent } from './shared-components/footer/footer-social-media/footer-social-media.component';
import { PaymentsSectionComponent } from './shared-components/footer/payments-section/payments-section.component';
import { FooterAddressComponent } from './shared-components/footer/footer-address/footer-address.component';
import { FlagsComponent } from './shared-components/toolbar/flags/flags.component';
import { SocialMediaLinksComponent } from './shared-components/toolbar/social-media-links/social-media-links.component';
import { FixedDatePickerBarComponent } from './shared-components/fixed-date-picker-bar/fixed-date-picker-bar.component';
import { SunglassesComponent } from './shared-components/icons/sunglasses/sunglasses.component';
import { MapComponent } from './shared-components/icons/map/map.component';
import { BagComponent } from './shared-components/icons/bag/bag.component';
import { GuitarComponent } from './shared-components/icons/guitar/guitar.component';
import { GoogleMapComponent } from './pages/contact/google-map/google-map.component';
import { HowToArriveComponent } from './pages/contact/how-to-arrive/how-to-arrive.component';
import { MessageComponent } from './pages/contact/message/message.component';
import { LocationDetailsComponent } from './pages/contact/how-to-arrive/location-details/location-details.component';
import { FeaturesHostelComponent } from './pages/home/features-hostel/features-hostel.component';
import { FeatureItemsComponent } from './pages/home/feature-items/feature-items.component';
import { PhotosSectionHomeThreeComponent } from './pages/home/photos-section-home-three/photos-section-home-three.component';
import { FeatureItemsTwoComponent } from './pages/home/feature-items-two/feature-items-two.component';

// Services
import { TextsService } from './services/texts.service';
import { RequestTranslateService } from './services/request-translate.service';
import { EmailLeadService } from './services/email-lead.service';

// Pipes
import { KeepHtmlPipe } from './pipes/keep-html.pipe';

// Flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

// Pages
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contato', component: ContactComponent },
  { path: 'trabalhe-conosco', component: WorkWithUsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DatepickerComponent,
    SidebarComponent,
    TextBlockComponent,
    ToolbarComponent,
    WhatsappContactComponent,
    PhotosSectionHomeOneComponent,
    PhotosSectionHomeTwoComponent,
    ContactComponent,
    SidebarListComponent,
    HomeComponent,
    FooterComponent,
    FooterListComponent,
    FooterSocialMediaComponent,
    PaymentsSectionComponent,
    FooterAddressComponent,
    FlagsComponent,
    SocialMediaLinksComponent,
    FixedDatePickerBarComponent,
    KeepHtmlPipe,
    FeatureItemsComponent,
    FeaturesHostelComponent,
    SunglassesComponent,
    MapComponent,
    GuitarComponent,
    GoogleMapComponent,
    HowToArriveComponent,
    MessageComponent,
    LocationDetailsComponent,
    WorkWithUsComponent,
    PhotosSectionHomeThreeComponent,
    FeatureItemsTwoComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // Angular components
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatMomentDateModule,
    MatStepperModule,
    // Angular Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // Routing
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    // Flash messages
    FlashMessagesModule.forRoot(),

  ],
  providers: [TextsService, RequestTranslateService, EmailLeadService],
  bootstrap: [AppComponent]
})
export class AppModule { }