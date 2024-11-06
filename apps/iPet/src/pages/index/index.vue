<template>
  <view class="h-full">
    <view class="hstack h-[88px] px-[48px]">
      <view class="hstack mr-[auto]">
        <svg-icon
          name="location"
          color="#333"
          class="w-[32px] h-[32px] mr-[12px]"
        ></svg-icon>
        <text ipet:text="32px  [#333333]" ipet:font="leading-[48px]">
          广州
        </text>
      </view>
      <view
        class="h-[64px] rounded-[32px] bg-[#fff] flex-1 ml-[28px] flex items-center px-[36px] justify-between"
      >
        <text ipet:text="28px  [#999]"> 搜索 </text>
        <svg-icon
          name="search"
          color="#666"
          class="w-[32px] h-[32px]"
        ></svg-icon>
      </view>
    </view>
    <view class="px-[48px] ">
      <swiper
        class="h-[320px]"
        circular
        :indicator-dots="true"
        :autoplay="false"
      >
        <swiper-item>
          <image
            class="h-full w-full rounded-[32px]"
            mode="scaleToFill"
            src="../../static/banner1.png"
          ></image>
        </swiper-item>
        <swiper-item>
          <image
            class="h-full w-full rounded-[32px]"
            mode="scaleToFill"
            src="../../static/banner2.png"
          ></image>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
      }
    },
    onLoad() { },
    methods: {},
  }
</script>