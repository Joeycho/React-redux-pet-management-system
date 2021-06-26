class OwnerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :uid, :name, :email
end
