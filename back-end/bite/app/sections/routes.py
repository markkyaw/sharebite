from bite.models import Section
from bite.serializers import SectionSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class SectionList(APIView):
    def get(self, request, format=None):
        sections = Section.objects.all()
        serializer = SectionSerializer(sections, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class SectionDetail(APIView):
    def get_object(self, pk):
        try:
            return Section.objects.get(pk=pk)
        except Section.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        section = self.get_object(pk)
        serializer = SectionSerializer(section)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        section = self.get_object(pk)
        serializer = SectionSerializer(section, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        section = self.get_object(pk)
        section.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
