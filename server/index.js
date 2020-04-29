const express=require('express');
const path=require('path');






app=express();



app.use(express.json({ limit: '10MB' }));



const appPath=path.join(__dirname, '..', 'build');
app.use(express.static(appPath));

app.get('*', function(req, res){
		res.sendFile(path.resolve(appPath, 'index.html'));
});

app.listen(process.env.PORT || 3001, function(){
		console.log('Server is avaiable and listening to port');

});


