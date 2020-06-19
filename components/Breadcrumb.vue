<template>
  <div>
    <div class="breadcrumb_section bg_gray page-title-mini">
        <div class="container"><!-- STRART CONTAINER -->
            <div class="row align-items-center">
              <div class="col-md-6">
                    <div class="page-title">
                    <h1>{{ name }}</h1>
                    </div>
                </div>
                <div class="col-md-6">
                    <ol class="breadcrumb justify-content-md-end">
                        <li class="breadcrumb-item"><nuxt-link  to="/">Inicio</nuxt-link></li>
                        <li class="breadcrumb-item active">
                            <nuxt-link :to="name" class="breadcrumb-item active">{{ name }}</nuxt-link>
                        </li>
                    </ol>
                </div>
            </div>
        </div><!-- END CONTAINER-->
    </div>
  </div>
</template>
<script>
export default {
  props: ['name'],
}
</script>
<style>

</style>
