//sleep(dom delay function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// DOM layout tree
const domStructure = {
    'layout1': ()=>{
        //swap children of boby-box2 
        let div2 = $('#b2b2');
        $('#layout-name').text('Layout sample 1')
        $('#b2b1').before(div2);
        $('#body-box2').css({
            display: 'grid',
            'grid-template-rows': 'repeat(2, 1fr)',
            'justify-content': 'stretch',
            'align-items': 'center'
        })
    },
    'layout2': ()=> {
        //swap children of main section
        let section2 = $('#body-box2');
        $('#layout-name').text('Layout sample 2')

        $('#body-box1').before(section2); 
        $('#main-section').css({
            display: 'grid',
            'grid-template-columns': '2fr 1fr',
            'grid-gap': '1rem',
            'justify-content': 'space-around',
            height: '68vh',
        });
        $('#body-box1').css('border-right', '2px solid purle');
        $('#body-box2').css('border', 'none');
        $('#b2b1').css('border', 'none');
    },
    'layout3': ()=>{
        $('#layout-name').text('Layout sample 3')

        // swap style of header and footer
        $('#main-head').css({
            'background-color': 'pink',
            'text-align': 'center'
        });
        $('#main-head h1').css({
            color: 'purple',
            'font-weight': '800px'
        });
        $('#main-head p').css('color', '#000');
        $('#main-footer').css({
            'background-color': '#555',
            color: 'pink',
            'text-align': 'center',
            'border': 'none'
        });
        $('#b2b1').css('border', 'none');
        $('.grand-box').css({
            color: '#fff',
            'text-align': 'center',
            padding: '50px',
            border: '4px solid purple',
            'border-radius': '8px'
        });
        $('.b1box h3').css('color', 'purple');
    },
    'changeLayout': function(){
        this.layout1();

        sleep(5000).then(()=> { 
            this.layout2();
        });
        
        sleep(10000).then(()=> { 
            this.layout3();
        });

        sleep(15000).then(()=> { 
        location.reload();
        });
    }
};

// event trigger
$('#btn').click(()=> {
        domStructure.changeLayout();
});