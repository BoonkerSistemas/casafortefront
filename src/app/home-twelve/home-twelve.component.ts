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
import { ServicesTwoComponent } from '../common/services-two/services-two.component';
import { WhyWeDifferentComponent } from '../common/why-we-different/why-we-different.component';
import { WorkComponent } from '../common/work/work.component';
import { PricingComponent } from '../common/pricing/pricing.component';
import { FaqComponent } from '../common/faq/faq.component';
import { FeedbackComponent } from '../common/feedback/feedback.component';
import { BlogComponent } from '../common/blog/blog.component';
import { PartnerComponent } from '../common/partner/partner.component';
import { SubscribeComponent } from '../common/subscribe/subscribe.component';
import { ContactComponent } from '../common/contact/contact.component';

@Component({
    selector: 'app-home-twelve',
    imports: [BannerComponent, WelcomeComponent, AboutComponent, StrategyComponent, WhoWeAreComponent, CtaComponent, SkillComponent, FunfactsComponent, TeamComponent, HowWeWorkComponent, ServicesTwoComponent, WhyWeDifferentComponent, WorkComponent, PricingComponent, FaqComponent, FeedbackComponent, BlogComponent, PartnerComponent, SubscribeComponent, ContactComponent],
    templateUrl: './home-twelve.component.html',
    styleUrls: ['./home-twelve.component.scss']
})
export class HomeTwelveComponent {}