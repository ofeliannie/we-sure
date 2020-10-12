$('.datepicker').pickadate({
    format: 'yyyy/mm/dd',
    firstDay: 0,
    
});
$('.timepicker').pickatime({
    min: [9,0],
    max: [17,0],
    format: 'HH:i'
});

$('#twzipcode').twzipcode({
    'hideCounty': ['臺北市', '宜蘭縣', '基隆市', '新北市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '彰化縣', '南投縣','嘉義市','嘉義縣', '雲林縣', '臺南市', '高雄市', '屏東縣', '臺東縣', '花蓮縣', '金門縣', '連江縣', '澎湖縣'],
});