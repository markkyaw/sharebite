from django.urls import path
from bite.app.sections import routes as SectionRoutes
from bite.app.items import routes as ItemRoutes
from bite.app.modifiers import routes as ModifierRoutes
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('section/', SectionRoutes.SectionList.as_view()),
    path('section/<int:pk>/', SectionRoutes.SectionDetail.as_view()),
    path('item/', ItemRoutes.ItemList.as_view()),
    path('item/<int:pk>/', ItemRoutes.ItemDetail.as_view()),
    path('modifier/', ModifierRoutes.ModifierList.as_view()),
    path('modifier/<int:pk>/', ModifierRoutes.ModifierDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
