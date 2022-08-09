/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

 import { PropType } from 'vue';
import { TdCalendarProps } from './type';

export default {
   /** 日期单元 */
   cell: {
     type: [Array, Function] as PropType<TdCalendarProps['cell']>,
   },
   /** 确认按钮 */
   confirmBtn: {
     type: [String, Function] as PropType<TdCalendarProps['confirmBtn']>,
   },
   /** 第一天从星期几开始，仅在日历展示维度为月份时（mode = month）有效。默认为 1 */
   firstDayOfWeek: Number,
   /** 头部插槽（左上角处，默认不显示任何内容） */
   head: String,
   /** 当前高亮的日期 */
   value: [String, Date] as PropType<TdCalendarProps['value']>,
 };
