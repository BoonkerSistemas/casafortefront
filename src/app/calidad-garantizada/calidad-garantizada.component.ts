import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from '../common/welcome/welcome.component';
import { AboutComponent } from '../common/about/about.component';
import { StrategyComponent } from '../common/strategy/strategy.component';
import { WhoWeAreComponent } from '../common/who-we-are/who-we-are.component';
import { CtaComponent } from '../common/cta/cta.component';
import { SkillComponent } from '../common/skill/skill.component';
import { FunfactsComponent } from '../common/funfacts/funfacts.component';
import { TeamComponent } from '../common/team/team.component';
import { HowWeWorkComponent } from '../common/how-we-work/how-we-work.component';
import { WhyWeDifferentComponent } from '../common/why-we-different/why-we-different.component';
import { WorkComponent } from '../common/work/work.component';
import { PricingComponent } from '../common/pricing/pricing.component';
import { FaqComponent } from '../common/faq/faq.component';
import { FeedbackComponent } from '../common/feedback/feedback.component';
import { BlogComponent } from '../common/blog/blog.component';
import { PartnerComponent } from '../common/partner/partner.component';
import { SubscribeComponent } from '../common/subscribe/subscribe.component';
import { ContactComponent } from '../common/contact/contact.component';
import { ServicesComponent } from './services/services.component';
import {UhpcComponent} from "./uhpc/uhpc.component";
import {NormativaEdificacionesComponent} from "./normativa-edificaciones/normativa-edificaciones.component";

@Component({
    selector: 'app-calidad-garantizada',
    imports: [BannerComponent,  CtaComponent, SkillComponent, FunfactsComponent, TeamComponent, HowWeWorkComponent, ServicesComponent, WhyWeDifferentComponent, WorkComponent, PricingComponent, FaqComponent, FeedbackComponent, BlogComponent, PartnerComponent, SubscribeComponent, ContactComponent, UhpcComponent, NormativaEdificacionesComponent],
    templateUrl: './calidad-garantizada.component.html',
    styleUrls: ['./calidad-garantizada.component.scss']
})
export class CalidadGarantizadaComponent {}
