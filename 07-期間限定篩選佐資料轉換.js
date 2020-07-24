let data={
    input:{
        type:'全部',
        title:''
    },
    menu:[
        {type:'主廚的話',title:'餐點簡介與相關說明',link:'javascript:;'},
        {type:'餐點擺盤',title:'萬用白瓷VS Code與套裝工具組',link:'javascript:;'},
        {type:'開胃餐點',title:'中式資料綁定佐無毒jQuery畫面處理',link:'javascript:;'},
        {type:'開胃餐點',title:'古早味事件燉畫面綁定',link:'javascript:;'},
        {type:'開胃餐點',title:'清爽表單處理佐雙向資料',link:'javascript:;'},
        {type:'開胃餐點',title:'使用者輸入焗列表呈現',link:'javascript:;'},
        {type:'開胃餐點',title:'期間限定篩選佐資料轉換',link:'javascript:;'},
        {type:'開胃餐點',title:'峰峰相連互動式資料表單',link:'javascript:;'},
        {type:'風味沙拉',title:'天然CSS過場佐jQuery動畫',link:'javascript:;'},
        {type:'風味沙拉',title:'異國風情資料觀測與設定',link:'javascript:;'},
    ]
}

let vm = new Vue({
    el:'#app',
    data:data,
    computed:{
        typeMenu(){
            if(this.input.type ==='全部'){
                return this.menu
            }else{
                return this.menu.filter(item=>{
                    return item.type === this.input.type
                })
            }
        },
       titleMenu(){
           if(this.input.title){
            return this.typeMenu.filter(item=>{
                return item.title.toLowerCase().indexOf(this.input.title.toLowerCase()) !=-1
            })
            
           }else{
               return this.typeMenu
           }
       }
    }
   
})