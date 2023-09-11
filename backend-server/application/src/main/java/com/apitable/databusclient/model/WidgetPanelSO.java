/*
 * databus-server
 * databus-server APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.apitable.databusclient.model;

import java.util.Objects;
import com.apitable.databusclient.model.WidgetInPanelSO;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.apitable.databusclient.JSON;

/**
 * WidgetPanelSO
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2023-09-08T12:26:03.751525+08:00[Asia/Shanghai]")
public class WidgetPanelSO {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_WIDGETS = "widgets";
  @SerializedName(SERIALIZED_NAME_WIDGETS)
  private List<WidgetInPanelSO> widgets = new ArrayList<>();

  public WidgetPanelSO() {
  }

  public WidgetPanelSO id(String id) {
    
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nonnull
  public String getId() {
    return id;
  }


  public void setId(String id) {
    this.id = id;
  }


  public WidgetPanelSO widgets(List<WidgetInPanelSO> widgets) {
    
    this.widgets = widgets;
    return this;
  }

  public WidgetPanelSO addWidgetsItem(WidgetInPanelSO widgetsItem) {
    if (this.widgets == null) {
      this.widgets = new ArrayList<>();
    }
    this.widgets.add(widgetsItem);
    return this;
  }

   /**
   * Get widgets
   * @return widgets
  **/
  @javax.annotation.Nonnull
  public List<WidgetInPanelSO> getWidgets() {
    return widgets;
  }


  public void setWidgets(List<WidgetInPanelSO> widgets) {
    this.widgets = widgets;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WidgetPanelSO widgetPanelSO = (WidgetPanelSO) o;
    return Objects.equals(this.id, widgetPanelSO.id) &&
        Objects.equals(this.widgets, widgetPanelSO.widgets);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, widgets);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WidgetPanelSO {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    widgets: ").append(toIndentedString(widgets)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("id");
    openapiFields.add("widgets");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("id");
    openapiRequiredFields.add("widgets");
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to WidgetPanelSO
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!WidgetPanelSO.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in WidgetPanelSO is not found in the empty JSON string", WidgetPanelSO.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!WidgetPanelSO.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `WidgetPanelSO` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : WidgetPanelSO.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if (!jsonObj.get("id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("id").toString()));
      }
      // ensure the json data is an array
      if (!jsonObj.get("widgets").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `widgets` to be an array in the JSON string but got `%s`", jsonObj.get("widgets").toString()));
      }

      JsonArray jsonArraywidgets = jsonObj.getAsJsonArray("widgets");
      // validate the required field `widgets` (array)
      for (int i = 0; i < jsonArraywidgets.size(); i++) {
        WidgetInPanelSO.validateJsonElement(jsonArraywidgets.get(i));
      };
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!WidgetPanelSO.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'WidgetPanelSO' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<WidgetPanelSO> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(WidgetPanelSO.class));

       return (TypeAdapter<T>) new TypeAdapter<WidgetPanelSO>() {
           @Override
           public void write(JsonWriter out, WidgetPanelSO value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public WidgetPanelSO read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of WidgetPanelSO given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of WidgetPanelSO
  * @throws IOException if the JSON string is invalid with respect to WidgetPanelSO
  */
  public static WidgetPanelSO fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, WidgetPanelSO.class);
  }

 /**
  * Convert an instance of WidgetPanelSO to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

