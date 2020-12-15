var waBox = new Vue ({
  el:"#wa-box",
  data:{
    contacts: [
    	{
    		name: 'Michele',
    		avatar: "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg",
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Fabio',
    		avatar: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
    		visible: true,
    		messages: [
    			{
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent'
    			},
    			{
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received'
    			},
    			{
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent'
    			}
    		],
    	},
    	{
    		name: 'Samuele',
    		avatar: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
    		visible: true,
    		messages: [
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received'
    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent'
    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Luisa',
    		avatar: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received'
    			}
    		],
    	},
    ],
    activeUser: 0,
    newText:"",
    searchLetters:"",
    deleteText: false
  },

  methods:{
    chatIndex : function (index) {

      this.activeUser = index;
      console.log(index);
      console.log("act ",this.activeUser);
    },
    text : function (index) {
      let newTxt = {
        date: '10/01/2020 15:50:00',
        text:this.newText,
        status: "sent"
      };
      this.contacts[this.activeUser].messages.push(newTxt);

      setTimeout(function () {
        let txtBack = {
          date: '10/01/2020 15:50:00',
          text:"OK",
          status: "received"
        };
        waBox.contacts[waBox.activeUser].messages.push(txtBack);
      },1000);
      this.newText="";
    },
    userResearch: function () {
      let n = 0;
      let names = [];
      while (n<4) {
        names.push(this.contacts[n].name);
        console.log(names);
        n++;
      }
      console.log("test");
      for (var i = 0; i < names.length; i++) {
        if (names[i].includes(this.searchLetters) == true){
        }else {
          this.contacts[i].visible=false;
        }
      }
    },
    removeText: function () {
      console.log("prima ",this.deleteText);
      this.deleteText = true;
      console.log("dopo ", this.deleteText);
      this.deleteText = false;
    }
  }

})
