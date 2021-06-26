class PetsController < ApplicationController
    def show
        pet = Pet.find(params[:id])
        render json: PetSerializer.new(pet)
    end

    def index
        pets = Pet.all
        render json: PetSerializer.new(pets)
      end
end
