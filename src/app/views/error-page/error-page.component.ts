import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  errorType: string | null = '';
  title: string = '';
  description: string = '';
  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorType = this.route.snapshot.paramMap.get('type');
    console.log('Error Type', this.errorType);

    this.subscription = this.route.data.subscribe(param => {
      console.log({ param })
      if (param['type']) {
        this.errorType = param['type'];
      }
      if (param['title']) {
        this.title = param['title'];
      }
      if (param['desc']) {
        this.description = param['desc']
      }
    });

    switch (this.errorType) {
      case '404':
        if (!this.title) {
          this.title = 'Page non trouvée'
        }
        if (!this.description) {
          this.description = 'Ooops!! La page que vous recherchez n\'a pas été trouvée.'
        }
        break;
      case '500':
        if (!this.title) {
          this.title = 'Désolé'
        }
        if (!this.description) {
          this.description = 'Ooops!! Nous rencontrons une erreur en ce moment. Veuillez reessayer plus tard'
        }
        break;
      default:
        // if (!this.type) {
        this.errorType = 'Ooops..';
        // }
        if (!this.title) {
          this.title = 'Erreur inattendue';
        }
        if (!this.description) {
          this.description = 'Veuillez nous excusez pour ce désagrément.<br>' + 'Nous travaillons à corriger ce problème le plus tôt possible';
        }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
