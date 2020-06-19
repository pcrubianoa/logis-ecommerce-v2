import Service from './Service';

const resource = 'ecommerce/v1/banners.php?apiKey=ZzFnT2c0aWRTT3hqTGhUcEg5ZWttdz09';

export default {
  get() {
    return Service.get(resource);
  }
}