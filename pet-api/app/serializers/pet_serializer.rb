class PetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :clinic,:owner
end
