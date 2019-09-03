class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  # since API, we need this line
  
end
