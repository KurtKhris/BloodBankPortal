import { Component, OnInit } from '@angular/core';
import { faCoffee, faPhone, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faCoffee = faCoffee;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMobile =faMobile;

  constructor() { }

  ngOnInit(): void {
  }

}
