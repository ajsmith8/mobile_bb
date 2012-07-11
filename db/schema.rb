# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120710210925) do

  create_table "browse_task_activities", :force => true do |t|
    t.integer  "task_id"
    t.integer  "user_id"
    t.integer  "reference_id"
    t.string   "data"
    t.boolean  "is_complete"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "t_id"
  end

  create_table "browse_tasks", :force => true do |t|
    t.string   "description"
    t.string   "model_name"
    t.integer  "parent_id"
    t.integer  "xp_value"
    t.integer  "lvl_req",     :default => 0
    t.integer  "rank",        :default => 0
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
  end

  create_table "categories", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "quiz_qs", :force => true do |t|
    t.integer  "source_id"
    t.integer  "t_id"
    t.string   "question"
    t.integer  "score",       :default => 0
    t.string   "correct"
    t.string   "wrong1"
    t.string   "wrong2"
    t.string   "wrong3"
    t.string   "wrong4"
    t.boolean  "is_approved", :default => false
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
  end

  create_table "quiz_task_activities", :force => true do |t|
    t.integer  "task_id"
    t.integer  "user_id"
    t.integer  "reference_id"
    t.string   "data"
    t.boolean  "is_complete"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "t_id"
  end

  create_table "quiz_tasks", :force => true do |t|
    t.string   "description"
    t.string   "model_name"
    t.integer  "parent_id"
    t.integer  "xp_value"
    t.integer  "lvl_req",     :default => 0
    t.integer  "rank",        :default => 0
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
  end

  create_table "reasons", :force => true do |t|
    t.integer  "t_id"
    t.text     "description"
    t.boolean  "is_pro"
    t.integer  "score",       :default => 0
    t.string   "title"
    t.boolean  "is_approved", :default => false
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
  end

  create_table "sources", :force => true do |t|
    t.integer  "reason_id"
    t.text     "description"
    t.string   "url"
    t.integer  "score",         :default => 0
    t.boolean  "is_approved",   :default => false
    t.boolean  "is_supporting"
    t.datetime "created_at",                       :null => false
    t.datetime "updated_at",                       :null => false
    t.integer  "t_id"
  end

  create_table "task_activities", :force => true do |t|
    t.integer  "task_id"
    t.integer  "user_id"
    t.integer  "reference_id"
    t.string   "data"
    t.boolean  "is_complete"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "t_id"
  end

  create_table "tasks", :force => true do |t|
    t.string   "description"
    t.string   "model_name"
    t.integer  "parent_id"
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
    t.integer  "rank",        :default => 0
    t.integer  "xp_value"
    t.integer  "lvl_req",     :default => 0
  end

  create_table "ts", :force => true do |t|
    t.string   "title"
    t.text     "description"
    t.string   "source_url"
    t.string   "url"
    t.integer  "score",            :default => 0
    t.boolean  "is_approved",      :default => false
    t.datetime "created_at",                          :null => false
    t.datetime "updated_at",                          :null => false
    t.integer  "politics",         :default => 0
    t.integer  "current_events",   :default => 0
    t.integer  "finance",          :default => 0
    t.integer  "health",           :default => 0
    t.integer  "tech",             :default => 0
    t.integer  "education",        :default => 0
    t.integer  "reasons_approved"
    t.integer  "product"
    t.float    "fraction"
  end

  create_table "users", :force => true do |t|
    t.string   "provider"
    t.string   "uid"
    t.string   "email"
    t.string   "name"
    t.boolean  "is_admin",       :default => false
    t.boolean  "is_temp_user",   :default => true
    t.datetime "created_at",                        :null => false
    t.datetime "updated_at",                        :null => false
    t.integer  "tech",           :default => 0
    t.integer  "education",      :default => 0
    t.integer  "politics",       :default => 0
    t.integer  "health",         :default => 0
    t.integer  "current_events", :default => 0
    t.integer  "finance",        :default => 0
    t.integer  "xp",             :default => 0
    t.integer  "level",          :default => 0
    t.string   "token"
  end

end
