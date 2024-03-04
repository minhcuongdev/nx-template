module.exports = {
  templates: `${__dirname}/.hygen`,
  helpers: {
    SwaggerName(name) {
      return `${this.ClassName(name)}Swagger`
    },
    privateServiceName(name) {
      return `_${this.changeCase.camelCase(name)}Service`
    },
    privateRepository(name) {
      return `_${this.changeCase.camelCase(name)}Repository`
    },
    InterfaceRepository(name) {
      return `I${this.changeCase.pascalCase(name)}Repository`
    },
    EndpointName(name) {
      return `${this.changeCase.pascalCase(name)}Endpoint`
    },
    TOKEN_REPOSITORY(name) {
      return `TOKEN_${this.inflection.dasherize(name).toUpperCase()}_REPOSITORY`
    },
    ReducerName(name) {
      return `${this.changeCase.pascalCase(name)}Reducer`
    },
    InitStateName(name) {
      return `init${this.changeCase.pascalCase(name)}State`
    },
    StateTypeName(name) {
      return `${this.changeCase.pascalCase(name)}State`
    },
    RepositoryName(name) {
      return `${this.ClassName(name)}Repository`
    },
    ControllerName(name) {
      return `${this.ClassName(name)}Controller`
    },
    ServiceName(name) {
      return `${this.ClassName(name)}Service`
    },
    ModuleName(name) {
      return `${this.ClassName(name)}Module`
    },
    DtoName(name) {
      return `${this.ClassName(name)}Dto`
    },
    TranslationDtoName(name) {
      return `${this.ClassName(name)}TranslationDto`
    },
    UpdateDtoName(name) {
      return `Update${this.DtoName(name)}`
    },
    DtoOptionName(name) {
      return `I${this.DtoName(name)}Options`
    },
    CreateDtoName(name) {
      return `Create${this.DtoName(name)}`
    },
    EntityName(name) {
      return `${this.ClassName(name)}Entity`
    },
    TranslationEntityName(name) {
      return `${this.ClassName(name)}TranslationEntity`
    },
    CreateCommandName(name) {
      return `Create${this.ClassName(name)}Command`
    },
    CreateHandlerName(name) {
      return `Create${this.ClassName(name)}Handler`
    },
    GetHandlerName(name) {
      return `Get${this.ClassName(name)}Handler`
    },
    GetQueryName(name) {
      return `Get${this.ClassName(name)}Query`
    },
    PageOptionsDtoName(name) {
      return this.ClassName(name) + 'PageOptionsDto'
    },
    NotFoundExceptionName(name) {
      return this.ClassName(name) + 'NotFoundException'
    },
    entityFileName(name) {
      return `${this.fileName(name)}.entity`
    },
    translationEntityFileName(name) {
      return `${this.fileName(name)}-translation.entity`
    },
    translationDtoFileName(name) {
      return `${this.fileName(name)}-translation.dto`
    },
    repositoryFileName(name) {
      return `${this.fileName(name)}.repository`
    },
    translationRepositoryFileName(name) {
      return `${this.fileName(name)}-translation.repository`
    },
    createCommandFileName(name) {
      return `create-${this.fileName(name)}.command`
    },
    getQueryFileName(name) {
      return `get-${this.fileName(name)}.query`
    },
    controllerFileName(name) {
      return `${this.fileName(name)}.controller`
    },
    dtoFileName(name) {
      return `${this.fileName(name)}.dto`
    },
    notFoundExceptionFileName(name) {
      return `${this.fileName(name)}-not-found.exception`
    },
    createDtoFileName(name) {
      return `create-${this.fileName(name)}.dto`
    },
    updateDtoFileName(name) {
      return `update-${this.fileName(name)}.dto`
    },
    pageOptionsDtoFileName(name) {
      return `${this.fileName(name)}-page-options.dto`
    },
    serviceFileName(name) {
      return `${this.fileName(name)}.service`
    },
    constantFileName(name) {
      return `${this.fileName(name)}.constant`
    },
    moduleFileName(name) {
      return `${this.fileName(name)}.module`
    },
    ClassName(name) {
      return this.changeCase.pascal(name)
    },
    TableName(name) {
      return this.inflection.pluralize(this.inflection.dasherize(name))
    },
    RepositoryName(name) {
      return `${this.ClassName(name)}Repository`
    },
    TranslationRepositoryName(name) {
      return `${this.ClassName(name)}TranslationRepository`
    },
    moduleName(name) {
      return this.changeCase.camel(name)
    },
    fileName(name) {
      return this.inflection.dasherize(name).toLowerCase()
    }
  }
}
