var contactList = new Vue ({
  el: "#contactList",
  data:{
    contacts: [
      {
        name: "michele",
        avatar:"https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
      },
      {
        name: "fabio",
        avatar: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
      },
      {
        name: "samuele",
        avatar: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
      },
      {
        name: "luisa",
        avatar: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
      }
    ],

  },
  methods:{
    showChat : function () {
      messages.show = true;
      console.log("click");
    },

  }
})




var messages = new Vue ({
  el: "#messages",
  data:{

    userMessages:{
        michele:[
          {
            user:"hai portato a spasso il cane?"
          },
          {
            user:"gli hai dato da mangiare?"
          },
          {
            correspondent:"tutto fatto!"
          }

        ],
        fabio:[
          {
            user:"userMessages-fabio-1"
          },
          {
            user:"userMessages-fabio-2"
          },
          {
            correspondent:"correspondentMessages-fabio-1"
          }
        ],
        samuele:[
          {
            user:"userMessages-sam-1"
          },
          {
            user:"userMessages-sam-2",
          },
          {
            correspondent:"correspondentMessages-sam-1"
          }
        ],
        luisa:[
          {
            user:"userMessages-luisa-1"
          },
          {
            user:"userMessages-luisa-2"
          },
          {
            correspondent:"correspondentMessages-luisa-1"
          }
        ]
      },
    show: false,
    id: "fabio",
  },

})























/*
[
 {
   michele:[
     {
       user:"hai portato a spasso il cane?"
     },
     {
       user:"gli hai dato da mangiare?"
     },
     {
       correspondent:"tutto fatto!"
     }

   ],
   fabio:[
     {
       user:"userMessages-fabio-1"
     },
     {
       user:"userMessages-fabio-2"
     },
     {
       correspondent:"correspondentMessages-fabio-1"
     }
   ],
   samuele:[
     {
       user:"userMessages-sam-1"
     },
     {
       user:"userMessages-sam-2",
     },
     {
       correspondent:"correspondentMessages-sam-1"
     }
   ],
   luisa:[
     {
       user:"userMessages-luisa-1"
     },
     {
       user:"userMessages-luisa-2"
     },
     {
       correspondent:"correspondentMessages-luisa-1"
     }
   ]
 },
],
*/
