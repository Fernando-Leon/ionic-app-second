<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/memories"></ion-back-button>
                </ion-buttons>
                <ion-title> {{ title }} </ion-title>
            </ion-toolbar>
        </ion-header>
            <ion-content>
               <slot></slot>
            </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/vue';

export default {
    name: 'BaseLayout',
    components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons },
    props: {
        title: {
            type: String
        }
    }
}

</script>