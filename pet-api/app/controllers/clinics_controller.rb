class ClinicsController < ApplicationController
    def show
        clinic = Clinic.find(params[:id])
        render json: ClinicSerializer.new(clinic)
    end

    def index
        clinics = Clinic.all
        render json: ClinicSerializer.new(clinics)
    end
end
