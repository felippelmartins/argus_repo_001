

function unico(valor, ind, self) {
    return self.indexOf(valor) === ind;
}



var vetor = [
'Smoke-Warning',
'Yawn-Warning',
'FaceMissing',
'LDW-Left-Warning',
'FaceMissing',
'LDW-Left-Warning',
'Yawn-Warning',
'FaceMissing',
'Smoke-Warning',
'Change-Warning',
'LDW-Right-Warning',
'FaceMissing',
'FaceMissing',
'LDW-Left-Warning',
'LDW-Right-Warning',
'FaceMissing',
'FaceMissing',
'Look-Around-Warning',
'FaceMissing',
'LDW-Right-Warning',
'Cam-Coverd-Warning',
'FaceMissing',
'Cam-Coverd-Warning',
'Smoke-Warning',
'Change-Warning',
'Look-Around-Warning',
'Cam-Coverd-Warning',
'Cam-Coverd-Warning',
'FaceMissing',
'FaceMissing',
'Yawn-Warning',
'LDW-Left-Warning',
'Look-Around-Warning',
'Look-Around-Warning',
'FaceMissing',
'Look-Around-Warning',
'Atten-Warning',
'FaceMissing',
'Yawn-Warning',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'Atten-Warning',
'FaceMissing',
'Yawn-Warning',
'FaceMissing',
'LDW-Right-Warning',
'LDW-Right-Warning',
'LDW-Left-Warning',
'Cam-Coverd-Warning',
'FaceMissing',
'LDW-Left-Warning',
'LDW-Left-Warning',
'LDW-Right-Warning',
'FaceMissing',                    
'FaceMissing',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'Yawn-Warning',
'FaceMissing',
'FaceMissing',
'Cam-Coverd-Warning',
'FaceMissing',
'Yawn-Warning',
'Change-Warning',
'Yawn-Warning',
'Yawn-Warning',
'Yawn-Warning',
'LDW-Left-Warning',
'Atten-Warning',
'Cam-Coverd-Warning',
'Yawn-Warning',
'Look-Around-Warning',
'FaceMissing',
'FaceMissing',
'LDW-Left-Warning',
'LDW-Right-Warning',
'FaceMissing',
'Look-Around-Warning',
'FaceMissing',
'LDW-Left-Warning',
'Atten-Warning',
'FaceMissing',
'Atten-Warning',
'LDW-Right-Warning',
'LDW-Right-Warning',
'Change-Warning',
'LDW-Left-Warning',
'Tired',
'FCW-Warning',
'LDW-Left-Warning',
'LDW-Left-Warning',
'FaceMissing',
'Atten-Warning',
'FaceMissing',
'FaceMissing',
'Yawn-Warning',
'Look-Around-Warning',
'Cam-Coverd-Warning',
'LDW-Left-Warning',
'FaceMissing',
'FaceMissing',
'Distraction-Warning',
'FaceMissing',
'Atten-Warning',
'Look-Around-Warning',
'Change-Warning',
'FaceMissing',
'Smoke-Warning',
'Change-Warning',
'Tired',
'FaceMissing',
'Yawn-Warning',
'Look-Around-Warning',,
'Yawn-Warning',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'Phone-Warning',
'FaceMissing',
'Yawn-Warning',
'FaceMissing',
'FaceMissing',
'LDW-Left-Warning',
'Atten-Warning',
'Look-Around-Warning',
'FaceMissing',
'Atten-Warning',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'Atten-Warning',
'FaceMissing',
'Yawn-Warning',
'FaceMissing',
'LDW-Left-Warning',
'FaceMissing',
'LDW-Right-Warning',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'FaceMissing',
'Atten-Warning',
'Change-Warning',
'Look-Around-Warning',
'Yawn-Warning',
'FaceMissing',
'Change-Warning',
'Smoke-Warning',
'FaceMissing',
'Smoke-Warning' 
]


var unico = vetor.filter(unico);
console.log(unico);

var alarmes_unicos = ['Smoke-Warning',
'Yawn-Warning',
'FaceMissing',
'LDW-Left-Warning',
'Change-Warning',
'LDW-Right-Warning',
'Look-Around-Warning',
'Cam-Coverd-Warning',
'Atten-Warning',
'Tired',
'FCW-Warning',
'Distraction-Warning',
'Phone-Warning' ]