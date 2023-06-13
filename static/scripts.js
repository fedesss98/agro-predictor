
// FORM MODEL SELECTION
window.addEventListener('load', function() {
    // Check if current page is form.html
    if (window.location.pathname === '/predict') {
        // Get references to the form and select elements
        var form = document.querySelector('form');
        var select = document.querySelector('#model');

        // Listen for changes to the select element
        select.addEventListener('change', function () {
            // Get the selected model
            var model = select.value;

            form.innerHTML = `
                <p class="lead">Insert here your data to have the Evapotranspiration predicted by our best model.</p>
            `;
            // Update the form fields based on the selected model
            if (model === 'model1') {
                // Add form fields for model 1
                form.innerHTML += `
                    <!-- Solar Radiation -->
                    <label for="Rs">Solar Radiation:</label>
                    <div class="input-group">
                        <input type="text" id="Rs" name="Rs">
                        <span class="input-unit">MJ/m²d</span>
                    </div>
                    <!-- Wind Speed -->
                    <label for="U2">Wind Speed:</label>
                    <span class="help-text">Enter the Wind Speed at 2 meters height in m/s</span>
                    <div class="input-group">
                        <input type="text" id="U2" name="U2"><br><br>
                        <span class="input-unit">m/s</span>
                    </div>
                    <!-- Max Relative Humidity -->
                    <label for="RHmax">Maximum Relative Humidity:</label>
                    <div class="input-group">
                        <input type="text" id="RHmax" name="RHmax"><br><br>
                        <span class="input-unit">%</span>
                    </div>
                    <!-- Min Relative Humidity -->
                    <label for="RHmin">Minimum Relative Humidity:</label>
                    <div class="input-group">
                        <input type="text" id="RHmin" name="RHmin"><br><br>
                        <span class="input-unit">%</span>
                    </div>
                    <!-- Max Temperature -->
                    <label for="Tmax">Maximum Temperature:</label>
                    <div class="input-group">
                        <input type="text" id="Tmax" name="Tmax"><br><br>
                        <span class="input-unit">°C</span>
                    </div>
                    <!-- Min Temperature -->
                    <label for="Tmin">Minimum Temperature:</label>
                    <div class="input-group">
                        <input type="text" id="Tmin" name="Tmin"><br><br>
                        <span class="input-unit">°C</span>
                    </div>
                    <!-- Soil Water Content -->
                    <label for="SWC">Soil Water Content:</label>
                    <div class="input-group">
                        <input type="text" id="SWC" name="SWC"><br><br>
                        <span class="input-unit">cm²/cm²</span>
                    </div>
                    <!-- NDVI -->
                    <label for="NDVI">NDVI:</label>
                    <span class="help-text">Enter the Normalized Difference Vegetation Index</span>
                    <div class="input-group">
                        <input type="text" id="NDVI" name="NDVI"><br><br>
                    </div>
                    <!-- NDWI -->
                    <label for="NDWI">NDWI:</label>
                    <span class="help-text">Enter the Normalized Difference Water Index</span>
                    <div class="input-group">
                        <input type="text" id="NDWI" name="NDWI"><br><br>
                    </div>
                    <!-- Day of the Year -->
                    <label for="DOY">Day of the Year:</label>
                    <span class="help-text">Enter the ordinal number of the day from 1 to 366</span>
                    <div class="input-group">
                        <input type="text" id="DOY" name="DOY"><br><br>
                        <span class="input-unit">/366</span>
                    </div>
                `;
            } else if (model === 'model2') {
                // Add form fields for model 2
                form.innerHTML += `
                    <!-- Solar Radiation -->
                    <label for="Rs">Solar Radiation:</label>
                    <div class="input-group">
                        <input type="text" id="Rs" name="Rs">
                        <span class="input-unit">MJ/m²d</span>
                    </div>
                    <!-- Wind Speed -->
                    <label for="U2">Wind Speed:</label>
                    <span class="help-text">Enter the Wind Speed at 2 meters height in m/s</span>
                    <div class="input-group">
                        <input type="text" id="U2" name="U2"><br><br>
                        <span class="input-unit">m/s</span>
                    </div>
                    <!-- Max Relative Humidity -->
                    <label for="RHmax">Maximum Relative Humidity:</label>
                    <div class="input-group">
                        <input type="text" id="RHmax" name="RHmax"><br><br>
                        <span class="input-unit">%</span>
                    </div>
                    <!-- Max Temperature -->
                    <label for="Tmax">Maximum Temperature:</label>
                    <div class="input-group">
                        <input type="text" id="Tmax" name="Tmax"><br><br>
                        <span class="input-unit">°C</span>
                    </div>
                    <!-- Min Temperature -->
                    <label for="Tmin">Minimum Temperature:</label>
                    <div class="input-group">
                        <input type="text" id="Tmin" name="Tmin"><br><br>
                        <span class="input-unit">°C</span>
                    </div>
                    <!-- Soil Water Content -->
                    <label for="SWC">Soil Water Content:</label>
                    <div class="input-group">
                        <input type="text" id="SWC" name="SWC"><br><br>
                        <span class="input-unit">cm²/cm²</span>
                    </div>
                    <!-- NDVI -->
                    <label for="NDVI">NDVI:</label>
                    <span class="help-text">Enter the Normalized Difference Vegetation Index</span>
                    <div class="input-group">
                        <input type="text" id="NDVI" name="NDVI"><br><br>
                    </div>
                    <!-- NDWI -->
                    <label for="NDWI">NDWI:</label>
                    <span class="help-text">Enter the Normalized Difference Water Index</span>
                    <div class="input-group">
                        <input type="text" id="NDWI" name="NDWI"><br><br>
                    </div>
                    <!-- Day of the Year -->
                    <label for="DOY">Day of the Year:</label>
                    <span class="help-text">Enter the ordinal number of the day from 1 to 366</span>
                    <div class="input-group">
                        <input type="text" id="DOY" name="DOY"><br><br>
                        <span class="input-unit">/366</span>
                    </div>
                `;
            } else if (model === 'model3') {
                // Add form fields for model 3
                form.innerHTML += `
                    <!-- Solar Radiation -->
                    <label for="Rs">Solar Radiation:</label>
                    <div class="input-group">
                        <input type="text" id="Rs" name="Rs">
                        <span class="input-unit">MJ/m²d</span>
                    </div>
                    <!-- Wind Speed -->
                    <label for="U2">Wind Speed:</label>
                    <span class="help-text">Enter the Wind Speed at 2 meters height in m/s</span>
                    <div class="input-group">
                        <input type="text" id="U2" name="U2"><br><br>
                        <span class="input-unit">m/s</span>
                    </div>
                    <!-- Max Relative Humidity -->
                    <label for="RHmax">Maximum Relative Humidity:</label>
                    <div class="input-group">
                        <input type="text" id="RHmax" name="RHmax"><br><br>
                        <span class="input-unit">%</span>
                    </div>
                    <!-- Max Temperature -->
                    <label for="Tmax">Maximum Temperature:</label>
                    <div class="input-group">
                        <input type="text" id="Tmax" name="Tmax"><br><br>
                        <span class="input-unit">°C</span>
                    </div>
                    <!-- Soil Water Content -->
                    <label for="SWC">Soil Water Content:</label>
                    <div class="input-group">
                        <input type="text" id="SWC" name="SWC"><br><br>
                        <span class="input-unit">cm²/cm²</span>
                    </div>
                    <!-- NDVI -->
                    <label for="NDVI">NDVI:</label>
                    <span class="help-text">Enter the Normalized Difference Vegetation Index</span>
                    <div class="input-group">
                        <input type="text" id="NDVI" name="NDVI"><br><br>
                    </div>
                    <!-- NDWI -->
                    <label for="NDWI">NDWI:</label>
                    <span class="help-text">Enter the Normalized Difference Water Index</span>
                    <div class="input-group">
                        <input type="text" id="NDWI" name="NDWI"><br><br>
                    </div>
                    <!-- Day of the Year -->
                    <label for="DOY">Day of the Year:</label>
                    <span class="help-text">Enter the ordinal number of the day from 1 to 366</span>
                    <div class="input-group">
                        <input type="text" id="DOY" name="DOY"><br><br>
                        <span class="input-unit">/366</span>
                    </div>
                `;
            } else if (model === 'model4') {
                // Add form fields for model 4
                form.innerHTML += `
                    <!-- Solar Radiation -->
                    <label for="Rs">Solar Radiation:</label>
                    <div class="input-group">
                        <input type="text" id="Rs" name="Rs">
                        <span class="input-unit">MJ/m²d</span>
                    </div>
                    <!-- Wind Speed -->
                    <label for="U2">Wind Speed:</label>
                    <span class="help-text">Wind Speed at 2 meters height in m/s</span>
                    <div class="input-group">
                        <input type="text" id="U2" name="U2"><br><br>
                        <span class="input-unit">m/s</span>
                    </div>
                    <!-- Max Relative Humidity -->
                    <label for="RHmax">Maximum Relative Humidity:</label>
                    <div class="input-group">
                        <input type="text" id="RHmax" name="RHmax"><br><br>
                        <span class="input-unit">%</span>
                    </div>
                    <!-- Max Temperature -->
                    <label for="Tmax">Maximum Temperature:</label>
                    <div class="input-group">
                        <input type="text" id="Tmax" name="Tmax"><br><br>
                        <span class="input-unit">°C</span>
                    </div>
                    <!-- Soil Water Content -->
                    <label for="SWC">Soil Water Content:</label>
                    <div class="input-group">
                        <input type="text" id="SWC" name="SWC"><br><br>
                        <span class="input-unit">cm²/cm²</span>
                    </div>
                    <!-- NDWI -->
                    <label for="NDWI">NDWI:</label>
                    <span class="help-text">Enter the Normalized Difference Water Index</span>
                    <div class="input-group">
                        <input type="text" id="NDWI" name="NDWI"><br><br>
                    </div>
                    <!-- Day of the Year -->
                    <label for="DOY">Day of the Year:</label>
                    <span class="help-text">Enter the ordinal number of the day from 1 to 366</span>
                    <div class="input-group">
                        <input type="text" id="DOY" name="DOY"><br><br>
                        <span class="input-unit">/366</span>
                    </div>
                `;
            } else if (model === 'model8') {
                // Add form fields for model 8
                form.innerHTML += `
                    <!-- Solar Radiation -->
                    <label for="Rs">Solar Radiation:</label>
                    <div class="input-group">
                        <input type="text" id="Rs" name="Rs">
                        <span class="input-unit">MJ/m²d</span>
                    </div>
                    <!-- Wind Speed -->
                    <label for="U2">Wind Speed:</label>
                    <span class="help-text">Wind Speed at 2 meters height in m/s</span>
                    <div class="input-group">
                        <input type="text" id="U2" name="U2"><br><br>
                        <span class="input-unit">m/s</span>
                    </div>
                    <!-- Max Relative Humidity -->
                    <label for="RHmax">Maximum Relative Humidity:</label>
                    <div class="input-group">
                        <input type="text" id="RHmax" name="RHmax"><br><br>
                        <span class="input-unit">%</span>
                    </div>
                    <!-- Min Relative Humidity -->
                    <label for="RHmin">Minimum Relative Humidity:</label>
                    <div class="input-group">
                        <input type="text" id="RHmin" name="RHmin"><br><br>
                        <span class="input-unit">%</span>
                    </div>
                    <!-- Max Temperature -->
                    <label for="Tmax">Maximum Temperature:</label>
                    <div class="input-group">
                        <input type="text" id="Tmax" name="Tmax"><br><br>
                        <span class="input-unit">°C</span>
                    </div>
                    <!-- Min Temperature -->
                    <label for="Tmin">Minimum Temperature:</label>
                    <div class="input-group">
                        <input type="text" id="Tmin" name="Tmin"><br><br>
                        <span class="input-unit">°C</span>
                    </div>
                `;
            } else if (model === 'model9') {
                // Add form fields for model 9
                form.innerHTML += `
                    <!-- ETo -->
                    <label for="ETo">Reference Evapotranspiration:</label>
                    <span class="help-text">Enter the Reference Evapotranspiration in mm/day</span>
                    <div class="input-group">
                        <input type="text" id="ETo" name="ETo">
                        <span class="input-unit">mm/day</span>
                    </div>
                    <!-- Soil Water Content -->
                    <label for="SWC">Soil Water Content:</label>
                    <div class="input-group">
                        <input type="text" id="SWC" name="SWC"><br><br>
                        <span class="input-unit">cm²/cm²</span>
                    </div>
                    <!-- NDVI -->
                    <label for="NDVI">NDVI:</label>
                    <span class="help-text">Enter the Normalized Difference Vegetation Index</span>
                    <div class="input-group">
                        <input type="text" id="NDVI" name="NDVI"><br><br>
                    </div>
                    <!-- NDWI -->
                    <label for="NDWI">NDWI:</label>
                    <span class="help-text">Enter the Normalized Difference Water Index</span>
                    <div class="input-group">
                        <input type="text" id="NDWI" name="NDWI"><br><br>
                    </div>
                    <!-- Day of the Year -->
                    <label for="DOY">Day of the Year:</label>
                    <span class="help-text">Enter the ordinal number of the day from 1 to 366</span>
                    <div class="input-group">
                        <input type="text" id="DOY" name="DOY"><br><br>
                        <span class="input-unit">/366</span>
                    </div>
                `;
            } else if (model === 'model12') {
                // Add form fields for model 12
                form.innerHTML += `
                    <!-- Solar Radiation -->
                    <label for="Rs">Solar Radiation:</label>
                    <div class="input-group">
                        <input type="text" id="Rs" name="Rs">
                        <span class="input-unit">MJ/m²d</span>
                    </div>
                    <!-- Soil Water Content -->
                    <label for="SWC">Soil Water Content:</label>
                    <div class="input-group">
                        <input type="text" id="SWC" name="SWC"><br><br>
                        <span class="input-unit">cm²/cm²</span>
                    </div>
                    <!-- NDVI -->
                    <label for="NDVI">NDVI:</label>
                    <span class="help-text">Enter the Normalized Difference Vegetation Index</span>
                    <div class="input-group">
                        <input type="text" id="NDVI" name="NDVI"><br><br>
                    </div>
                    <!-- NDWI -->
                    <label for="NDWI">NDWI:</label>
                    <span class="help-text">Enter the Normalized Difference Water Index</span>
                    <div class="input-group">
                        <input type="text" id="NDWI" name="NDWI"><br><br>
                    </div>
                    <!-- Day of the Year -->
                    <label for="DOY">Day of the Year:</label>
                    <span class="help-text">Enter the ordinal number of the day from 1 to 366</span>
                    <div class="input-group">
                        <input type="text" id="DOY" name="DOY"><br><br>
                        <span class="input-unit">/366</span>
                    </div>
                `;
            }
            form.innerHTML += `
                        <input class="btn center my-5" type="submit" value="Submit">
            `;
        });
    }
});
