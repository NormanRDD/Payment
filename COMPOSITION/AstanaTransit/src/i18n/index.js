import i18next from 'i18next';
import kz from './kz.json';
import ru from './ru.json';

i18next.init({
  lng: 'ru',
  fallbackLng: 'kz',
  debug: true,
  resources: {
    kz: { translation: kz },
    ru: { translation: ru }
  }
});

export default i18next;
