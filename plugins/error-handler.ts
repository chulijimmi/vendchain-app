export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // handle error, e.g. report to a service
    console.error("Plugins::error-handler", { error, instance, info });
    // clear error imediately after createError from component level
    clearError();
  };
});
