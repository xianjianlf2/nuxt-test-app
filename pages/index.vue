<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="good in goods" :key="good.id">
        <nuxt-link :to="`/detail/${good.id}`">
          <span>{{ good.text }}</span>
          <span>￥{{ good.price }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, error }) {
    const { ok, goods } = await $axios.$get('/api/goods')
    if (ok) {
      return { goods }
    }
    // 错误处理
    error({ statusCode: 400, message: '数据查询失败' })
  },
  data() {
    return {
      goods: [],
    }
  },
  head() {
    return {
      title: '课程列表',
      meta: [
        { name: 'description', hid: 'description', content: 'set pagemeta' },
      ],
      link: [{ rel: 'favicon', href: 'favicon.ico' }],
    }
  },
}
</script>