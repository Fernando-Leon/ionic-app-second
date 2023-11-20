<template>

                <base-layout title="Lista de elementos">
                    <ion-list>
                        <ion-item router-link="/memories/1">
                            <ion-label>Item 1</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Item 2</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Item 3</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Item 4</ion-label>
                        </ion-item>
                    </ion-list>
                </base-layout>
</template>


<script>
import BaseLayout from '@/components/base/BaseLayout.vue';
import { IonList, IonItem, IonLabel} from '@ionic/vue';

export default {
    name: 'MemoriesPage',
    components: { BaseLayout, IonItem, IonList, IonLabel },

}
</script>