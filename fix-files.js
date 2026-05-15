console.log('Parsing OPENAPI Files');
const fs = require("fs");
//let address = 'https://api-cmp-dev.intra.cloud.it/providers';
//let address = 'https://BACKEND_URL'; 
let address = 'https://api.arubacloud.com';// PROD ADDRESS
//let address = 'projects'; // PROD ADDRESS
let path = 'swaggerfiles/filtered';
let schemaTemplateFilePath = 'swaggerfiles/templates/resourcemanager.json'
const templateData = JSON.parse(fs.readFileSync(schemaTemplateFilePath));
const schemaPropertyLinkMapping = {
    // Mappature specifiche per schema
    'LocationDto': {
        'value': '/docs/metadata/#location-and-data-center'
    },
    'KubernetesVersionDto': {
        'value': '/docs/metadata/#kubernetes-version'
    },
    'KubernetesInsertVersionDto': {
        'value': '/docs/metadata/#kubernetes-version'
    },
    'KubernetesUpdateVersionDto': {
        'value': '/docs/metadata/#kubernetes-version'
    },
    'NodePoolsDto': {
        'instance': '/docs/metadata/#kaas-flavors'
    },
    'EngineRequestPropertiesDto':{
        'id': '/docs/metadata/#dbaas-engines',
        //'flavor': '/docs/metadata/#dbaas-flavors',
    },
    'FlavorRequestPropertiesDto':{
        'name': '/docs/metadata/#dbaas-flavors',
    },
    // 'Aruba.CmpService.Computing.Dtos.Resources.GenericResourceDto': {
    //     'uri': '/docs/metadata/#cloud-server-templates'
    // },
    'Aruba.CmpService.Computing.Dtos.Resources.CloudServerPropertiesDto': {
        'flavorId': '/docs/metadata/#cloudserver-flavors',
        'template': '/docs/metadata/#cloud-server-templates'
    },
    'CloudServerPropertiesDto':
    {
        'flavorName': '/docs/metadata/#cloudserver-flavors',
        'bootVolume': '/docs/metadata/#cloud-server-bootvolume'
    },
    /// Da modificare appena sarà pronta la pagina statica
    'Aruba.CmpService.StorageProvider.Abstractions.Dtos.Volumes.VolumePropertiesDto': {
        'image': '/docs/metadata/#cloud-server-bootvolume'
    },

    'SchedulePropertiesRequestDto': {
        'steps:':'/docs/metadata#schedule-steps',
        'scheduleJobType':'/docs/metadata#schedule',
        'scheduleAt':'/docs/metadata#schedule',
        'executeUntil':'/docs/metadata#schedule',
        'cron':'/docs/metadata#schedule',
    },
    'StepRequestDto': {
        'name':'/docs/metadata#schedule-steps',
        'actionUri':'/docs/metadata#schedule-steps',
        'httpVerb':'/docs/metadata#schedule-steps',
        'body':'/docs/metadata#schedule-steps',
    }
    // Altri schemi
};

// Mappatura per le descrizioni che devono essere sostituite aggiunte in ogni schema
const globalPropertyLinkMapping = {
    'dataCenter': '/docs/metadata/#location-and-data-center',
    // Altre proprietà comuni
};
// Per i seguenti schema non verrà effettuata la sostituzione con il DTO UserPayload
const skipSchemaReplacement = [
    'Aruba.CmpService.Computing.Dtos.Resources.GenericResourceDto',
    'Aruba.CmpService.Computing.Api.v1.Models.SetPasswordDto',
    'Aruba.CmpService.Computing.Api.v1.Models.AssociateDisassociateSubnetsDto',
    'Aruba.CmpService.Computing.Api.v1.Models.AssociateDisassociateElasticIpsDto',
    'Aruba.CmpService.Computing.Api.v1.Models.AssociateDisassociateSecurityGroupsDto',
    'Aruba.CmpService.Computing.Api.v1.Models.AttachDetachVolumesDto',
    'SetPasswordDto',
    'AssociateDisassociateSubnetsDto',
    'AssociateDisassociateElasticIpsDto',
    'AssociateDisassociateSecurityGroupsDto',
    'AttachDetachVolumesDto',
    'DetachVolumeKaasRequestDto',
    'AttachVolumeKaasRequestDto',
    'KmipNameDto',
    'KmsKeyEditDto',
    'KmsKeyAddDto',
    'RestoreFromVolumeDto',
    'DbaasDatabaseRequestDto',
    'DatabaseUserGrantCreationRequestDto',
    'DatabaseUserRequestDto',
    'DatabaseUserPasswordRequestDto',
    'RegistryUpdatePasswordDto',
    'Aruba.CmpService.BaremetalProvider.Abstractions.Dtos.RenameDto',
    'Aruba.CmpService.BaremetalProvider.Abstractions.Dtos.SetAutomaticRenewDto',
    'Aruba.CmpService.ContainerProvider.Dtos.Resources.Data.DetachVolumeKaasRequestDto',
    'DetachVolumeKaasRequestDto',
    'Aruba.CmpService.ContainerProvider.Dtos.Resources.Data.DetachVolumeKaasRequestDto',
    'Aruba.CmpService.ContainerProvider.Dtos.Resources.Data.AttachVolumeKaasRequestDto'



];

// Per i seguenti schema verrà utilizzato il DTO UserPayload senza la location 
const schemaWithoutLocation = [
       'VpcPeeringRouteUpdateDto',
       'VpcPeeringUpdateDto',
       'BackupPolicyInsertDto',
       'BackupPolicyUpdateDto',
       'Aruba.CmpService.BaremetalProvider.Abstractions.Dtos.Hpcs.HPCDto',
    ];

// Schema without properties
const schemaWithoutProperties = [
    'VpnRouteUpdateDto'
]
fs.readdirSync(path).forEach((file) => {
    //console.log(file);
    var filePath = path + '/' + file;
    var processedPath  = path + '/processed/' + file;
    
    if(fs.lstatSync(filePath).isFile())
    {
        const data = fs.readFileSync(filePath);

        var jsonData = JSON.parse(data);
        jsonData.servers[0].url = address;
        delete jsonData.info.contact;
        enrichProviderDescription(jsonData,file);
        /// Read from ResourceManager json the DTO schema and add it to the 
        /// profider OpenAPI file 
        hasRequiredMethod(jsonData,(result) => {
            if(result){
                Object.keys(templateData.components.schemas).forEach(function(key) {
                    var schema = templateData.components.schemas[key];
                    jsonData.components.schemas[key] = schema; // Add schemas
                    //console.log(jsonData.components.schemas[key]);
            
                });
            }
        });

    
        Object.keys(jsonData.paths).forEach(function(key) {
            var val = jsonData.paths[key];
            // var schemaName = 'ResourceBaseDto'
            // var schema = jsonData.components.schemas['ResourceBaseDto'].properties;
            // const templateSchema = templateData.components.schemas['ResourceBaseDto'];
            // templateSchema.properties['properties'] = schema['properties']; 
            // jsonData.components.schemas[schemaName].properties =  templateSchema.properties;
            ///Navigate all Methods
            Object.keys(val).forEach(function(key){
                
                var method = val[key];
                //console.log("Fix file: " + file);
                //console.log(method);
                if (method.parameters) {
                    method.parameters = method.parameters.filter(param => param.name !== 'ce-source');
                }
                if(method.requestBody)
                {
                    console.log(file);
                    if( file !== 'project.json')
                    {
                        Object.keys(method.requestBody.content).forEach(function(key){
                       
                        
                            const contentType = method.requestBody.content[key];
                            console.log(contentType.schema);
                            if(contentType.schema.$ref)
                            {
                                
                                const schemaName = contentType.schema.$ref.split('/').pop(); 
                                if(skipSchemaReplacement.includes(schemaName) == false)
                                //if(schemaName != 'Aruba.CmpService.Computing.Dtos.Resources.GenericResourceDto')
                                {
                                    const schema = jsonData.components.schemas[schemaName].properties;
                                    //DEEP COPY
                                    const templateSchema = JSON.parse(JSON.stringify(templateData.components.schemas['ResourceBaseDto']));
                                    const templateSchemaNoLocation = JSON.parse(JSON.stringify(templateData.components.schemas['ResourceBaseDtoV2']));
                                    
                                    if(schemaWithoutLocation.includes(schemaName) == true)
                                    {
                                        templateSchemaNoLocation.properties['properties'] = schema['properties']; 
                                        jsonData.components.schemas[schemaName].properties =  templateSchemaNoLocation.properties;

                                    }
                                    else 
                                    {
                                        templateSchema.properties['properties'] = schema['properties']; 
                                        jsonData.components.schemas[schemaName].properties =  templateSchema.properties;

                                    }
                                    if(schemaWithoutProperties.includes(schemaName) == true)
                                    {
                                        delete jsonData.components.schemas[schemaName].properties['properties'];
                                    }

                                }

                            }
                            else 
                            {
                                if(contentType.schema.allOf && contentType.schema.allOf[0].$ref)
                                {
                                    const schemaName = contentType.schema.allOf[0].$ref.split('/').pop(); 
                                    if(skipSchemaReplacement.includes(schemaName) == false)
                            //        if(schemaName != 'Aruba.CmpService.Computing.Dtos.Resources.GenericResourceDto')
                                    {
                                            const schema = jsonData.components.schemas[schemaName].properties;
                                            //DEEP COPY
                                            const templateSchema = JSON.parse(JSON.stringify(templateData.components.schemas['ResourceBaseDto']));
                                            const templateSchemaNoLocation = JSON.parse(JSON.stringify(templateData.components.schemas['ResourceBaseDtoV2']));
                                    
                                            if(schemaWithoutLocation.includes(schemaName) == true)
                                            {
                                                templateSchemaNoLocation.properties['properties'] = schema['properties']; 
                                                jsonData.components.schemas[schemaName].properties =  templateSchemaNoLocation.properties;

                                            }
                                            else 
                                            {
                                                templateSchema.properties['properties'] = schema['properties']; 
                                                jsonData.components.schemas[schemaName].properties =  templateSchema.properties;

                                            }
                                            if(schemaWithoutProperties.includes(schemaName) == true)
                                            {
                                                delete jsonData.components.schemas[schemaName].properties['properties'];
                                            }
                                            // templateSchema.properties['properties'] = schema['properties']; 
                                            // jsonData.components.schemas[schemaName].properties =  templateSchema.properties;
                                    }
                                }
                            }
                              
                            //Debug single file
                            // if(file === 'compute-provider.json')
                            //     {
                            //         console.log(testName + ' ' + schemaName + ' ');
                            //         console.log(JSON.stringify(schema.properties));
                            //         //console.log(JSON.stringify(templateSchema.properties));
                            //         console.log(JSON.stringify(jsonData.components.schemas[schemaName].properties));
                            //         console.log(JSON.stringify(jsonData.components.schemas['Aruba.CmpService.Computing.Dtos.Resources.CloudServerDto'].properties));
                            //     }

                        });
                    }

                }
                // //Rimuovere campi dalla response
                // if(method.responses)
                // {
                //     Object.keys(method.responses).forEach(function(key){
                        
                //         Object.keys(method.responses.content).forEach(function(key){
                //             const contentType = method.responses.content[key];
                //             const schemaName = contentType.schema.$ref.split('/').pop();
                //             const schema = jsonData.components.schemas[schemaName]
                //             if (schema && schema.properties && schema.properties.ecommerce) {
                //                 // Rimuove il campo ecommerce dallo schema delle response
                //                 delete schema.properties.ecommerce;
                //               }

                //         });

                //     });
                // }
            });
        });

        Object.keys(jsonData.components.schemas).forEach(function(key){
                
            var schema = jsonData.components.schemas[key];
            if (schema && schema.properties && schema.properties.ecommerce) {
                // Rimuove il campo ecommerce dallo schema delle response
                delete schema.properties.ecommerce;
            }
            
        });
        if( file === 'project.json')
            {
    
                Object.keys(jsonData.components.schemas).forEach(function(key){
                        
                    var schema = jsonData.components.schemas[key];
                    if (schema && schema.properties && schema.properties.clusters) {
                        // Rimuove il campo ecommerce dallo schema delle response
                        delete schema.properties.clusters;
                    }
                    
                });
    
            }
    
        enrichSchemaDescriptions(jsonData.components.schemas, schemaPropertyLinkMapping, globalPropertyLinkMapping);
        //console.log('Save file: ' + processedPath);
        //console.log(jsonData);
        //fs.writeFile(processedPath,JSON.stringify(jsonData),'utf8',() => {});
        fs.writeFile('static/openapi/' + file,JSON.stringify(jsonData),'utf8',() => {});
    }


});

function hasRequiredMethod(jsonData,callback) { 
    const requiredMethods = ['post', 'put', 'patch'];
            // Itera su tutte le API definite nel file JSON di Swagger
            for (const methods of Object.values(jsonData.paths)) {
                // Controlla se c'è almeno un metodo richiesto
                if (Object.keys(methods).some(method => requiredMethods.includes(method.toLowerCase()))) {
                    callback(true);
                    return;
                }
            }
            callback(false);
}

function enrichSchemaDescriptions(schemas, schemaSpecificMapping, globalMapping) {
    for (let schemaName in schemas) {
        let schema = schemas[schemaName];

        if (schema.properties) {
            // 3.1 Gestione delle proprietà specifiche per lo schema
            if (schemaSpecificMapping[schemaName]) {
                let schemaMapping = schemaSpecificMapping[schemaName];
                for (let property in schema.properties) {
                    if (schemaMapping[property]) {
                        let description = schema.properties[property].description || '';
                        let link = schemaMapping[property];
                        
                        // Evita di aggiungere il link se già presente
                        if (!description.includes(link)) {
                            //let newDescription = description + `\n\nFor more information, check the [documentation](${link}).`;
                            let newDescription = description + `\n\nFor more information, check the <a href="${link}" target="_blank">documentation</a>.`;
                            schema.properties[property].description = newDescription.trim();
                        }
                    }
                }
            }

            // 3.2 Gestione delle proprietà globali
            for (let property in schema.properties) {
                if (globalMapping[property]) {
                    let description = schema.properties[property].description || '';
                    let link = globalMapping[property];
                    
                    // Evita di aggiungere il link se già presente
                    if (!description.includes(link)) {
                        //let newDescription = description + `\n\nFor more information, check the [documentation](${link}).`;
                        let newDescription = description + `\n\nFor more information, check the <a href="${link}" target="_blank">documentation</a>.`;
                        schema.properties[property].description = newDescription.trim();
                    }
                }
            }
        }
    }
}

function enrichProviderDescription(jsonData,file){

    let newDescription = jsonData.info.description + `\n\nDownload the <a href="/openapi/${file}" target="_blank"> OpenAPI file</a>`;
    jsonData.info.description = newDescription.trim();
}
